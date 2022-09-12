import { Request, Response } from "express";
import UserData from "../data/UserData";
import Authenticator from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { AuthenticationData } from "../services/types";

class UserController {
  createUser = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.statusCode = 400;
        throw new Error("Dados insuficientes, passe email e senha");
      }

      if (email.indexOf("@") === -1) {
        res.statusCode = 400;
        throw new Error("Email inválido, acrescente @");
      }

      const userData = new UserData();

      const emailExiste = await userData.buscaUserPorEmail(email);
      if (emailExiste) {
        throw new Error("Email já cadastrado");
      }
      if (password.length < 6) {
        res.statusCode = 400;
        throw new Error("Senha muito curta, mínimo 6 caracteres");
      }

      const id = new GenerateId().generateId();

      await userData.insertUser(id, email, password);

      const payload: AuthenticationData = { id };

      const token = new Authenticator().generateToken(payload);

      res.status(201).send({
        message: "Usuário cadastrado com sucesso!",
        token,
      });
    } catch (error: any) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: error.message });
      } else {
        res
          .status(res.statusCode)
          .send({ message: error.sqlMessage || error.message });
      }
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.statusCode = 400;
        throw new Error("Os parâmetros email e password são obrigatórios!");
      }
      if (email.indexOf("@") === -1) {
        res.statusCode = 400;
        throw new Error("Email inválido, acrescente @");
      }

      const userData = new UserData();

      const userExists = await userData.buscaUserPorEmail(email);
     
      if (!userExists) {
        res.statusCode = 400;
        throw new Error("Email inválido!");
      }

      if (userExists!.password !== password) {
        res.statusCode = 400;
        throw new Error("Senha inválida");
      }

      const token = new Authenticator().generateToken({
        id: userExists!.id,
      });

      res.status(200).send({
        message: "Usuário logado com sucesso",
        token,
      });
    } catch (error: any) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: error.message });
      } else {
        res
          .status(res.statusCode)
          .send({ message: error.sqlMessage || error.message });
      }
    }
  };

  getUserProfile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      if (!token) {
        res.statusCode = 401;
        throw new Error("Não autorizado!");
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.getDataToken(token);      

      if (!tokenData) {
        res.statusCode = 401;
        throw new Error("Não autorizado, token inválido");
      }

      const userData = new UserData()

      const result = await userData.getUserById(tokenData.id)

      if (!result) {
        res.statusCode = 400
        throw new Error("Usuário não existe")
    }
    res.status(200).send({
        id: result.id,
        email: result.email
        
    })
    

    } catch (error: any) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: error.message });
      } else {
        res
          .status(res.statusCode)
          .send({ message: error.sqlMessage || error.message });
      }
    }
  };
}

export default UserController;

import { Request, Response } from "express";
import UserData from "../data/UserData";
import { InvalidCredencial } from "../error/IncorrectPassword";
import User from "../model/User";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { USER_ROLES } from "../services/types";

class UserController {
  createUser = async (req: Request, res: Response) => {
    try {
      const { email, password, role } = req.body;

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
      if (role !== "NORMAL" && role !== "ADMIN") {
        res.statusCode = 400;
        throw new Error("Role inválida, NORMAL ou ADMIN");
      }

      const id = new GenerateId().generateId();
      //---------------------------------------------------
      // await userData.insertUser(id, email, password);
      const hashManager = new HashManager();

      const hash = await hashManager.hash(password);

      const user = new User(id, email, hash, role);

      await userData.insertUser(user);
      //-----------------------------------------------------

      const payload: ITokenPayload = { id, role };

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

      const userDbExists = await userData.buscaUserPorEmail(email);

      if (!userDbExists) {
        res.statusCode = 400;
        throw new Error("Email inválido!");
      }

      const hashManager = new HashManager();

      const isPasswordCorrect = await hashManager.compare(
        password,
        userDbExists.password
      );

      // if (userDbExists!.password !== password) {
      //   res.statusCode = 400;
      //   throw new Error("Senha inválida");
      // }

      if (!isPasswordCorrect) {
        throw new InvalidCredencial();
      }

      // const token = new Authenticator().generateToken({
      //   id: userDbExists!.id,
      // });

      const payload: ITokenPayload = {
        id: userDbExists.id,
        role: userDbExists.role,
      };

      const token = new Authenticator().generateToken(payload);

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
        throw new Error("Token não encontrado!");
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.getDataToken(token);

      if (!tokenData) {
        res.statusCode = 401;
        throw new Error("Não autorizado, token inválido");
      }

      if (tokenData.role !== USER_ROLES.NORMAL) {
        res.statusCode = 403;
        throw new Error("Não autorizado, role deve ser Normal");
      }

      const userData = new UserData();

      const result = await userData.getUserById(tokenData.id);

      if (!result) {
        res.statusCode = 400;
        throw new Error("Usuário não existe");
      }
      res.status(200).send({
        id: result.getId(),
        email: result.getEmail(),
        role: result.getRole(),
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
  removeUser = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const { id } = req.params;

      if (!token || !id) {
        res.statusCode = 400;
        throw new Error("Insira um token e um id");
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.getDataToken(token) as ITokenPayload;

      if (!tokenData) {
        res.statusCode = 401;
        throw new Error("Não autorizado, token inválido");
      }

      if (tokenData.role !== USER_ROLES.ADMIN) {
        res.statusCode = 403;
        throw new Error("Não autorizado, precisa ser ADMIN");
      }

      const userDB = new UserData();

      const user = await userDB.getUserById(id);

      if (!user) {
        res.statusCode = 400;
        throw new Error("Usuário não existe");
      }

      await userDB.deleteUser(id);

      res.status(200).send({ message: "Usuário removido com sucesso" });
    } catch (error: any) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: error.message });
      } else {
        res
          .status(res.statusCode)
          .send({ message: error.sqlMessage || error.message });
      }
    }
  }

  getAllUsers = async (req: Request, res: Response) => {
    try {

      const token = req.headers.authorization as string

      if (!token) {
        res.statusCode = 401
        throw new Error("Insira um token")
      }

      const tokenData = new Authenticator().getDataToken(token)

      if (!tokenData) {
        res.statusCode = 401
        throw new Error("Não autorizado, token inválido")
    }

    const userDB = new UserData()

    const user = await userDB.getUserById(tokenData.id)

    if (!user) {
      res.statusCode = 404
      throw new Error("Usário inexistente!")    }
   

    res.status(200).send({
      id: user.getId(),
      email: user.getEmail(),
      rolle: user.getRole()
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
  }
}

export default UserController;

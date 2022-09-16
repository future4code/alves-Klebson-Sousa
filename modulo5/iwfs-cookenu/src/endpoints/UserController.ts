import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";
import User from "../model/User";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

class UserController {
  signupUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        res.statusCode = 422;
        throw new Error(
          "Os campos name, email, password, role devem ser preenchidos!"
        );
      }

      if (email.indexOf("@") === -1) {
        res.statusCode = 400;
        throw new Error("Email inválido, acrescente @");
      }

      if (password.length < 6) {
        res.statusCode = 400;
        throw new Error("Senha muito curta, mínimo 6 caracteres");
      }

      const userDB = new UserDataBase();

      const user = await userDB.selectUserByEmail(email);

      if (user) {
        // foi usado anteriormente só user
        res.statusCode = 400;
        throw new Error("Usuário já existe");
      }

      const generateId = new GenerateId();
      const id = generateId.generateIds();

      const hashManager = new HashManager();
      const hashPassword = await hashManager.createHash(password);

      const newUser = new User(id, name, email, hashPassword);
      await userDB.insertUser(newUser);

      const token = new Authenticator().generateToken({ id });

      res.status(200).send({
        message: "Usuário criado com sucesso!",
        token,
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.statusCode = 422;
        throw new Error(
          "Os campos name, email, password, role devem ser preenchidos!"
        );
      }

      const userDB = new UserDataBase();

      const user = await userDB.selectUserByEmail(email);

      if (!user) {
        // foi usado anteriormente só user
        res.statusCode = 400;
        throw new Error("Usuário não cadastrado");
      }

      const hashManager = new HashManager();
      const comparePassword = await hashManager.compareHash(
        password,
        user.getPassword()
      );

      if (!comparePassword) {
        res.statusCode = 400;
        throw new Error("Invalid passwordSenha incorreta!");
      }

      const token = new Authenticator().generateToken({ id: user.getId() });

      res.status(200).send({
        message: "Usuário logado com sucesso!",
        token,
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  getUserProfileLog = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      if (!token) {
        res.statusCode = 401;
        throw new Error("Insira um token");
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.getTokenData(token);

      if (!tokenData) {
        res.statusCode = 401;
        throw new Error("Não autorizado, token inválido");
      }

      const userDB = new UserDataBase();

      const user = await userDB.selectUserById(tokenData.id);

      if (!user) {
        res.statusCode = 404;
        throw new Error("Usuário não existe");
      }
    
      res.status(200).send({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
      });
    } catch (error: any) {
      res
      .status(error.statusCode || 500)
      .send({ message: error.message || error.sqlMessage })
    }
  }

  getUserById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const {id} = req.params

      if (!token || !id) {
        res.statusCode = 401;
        throw new Error("Insira um token e um id");
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.getTokenData(token);

      if (!tokenData) {
        res.statusCode = 401;
        throw new Error("Não autorizado, token inválido");
      }

      const userDB = new UserDataBase();

      const user = await userDB.selectUserById(id);

      if (!user) {
        res.statusCode = 404;
        throw new Error("Usuário não existe");
      }
      
      res.status(200).send({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
      });
    } catch (error: any) {
      res
      .status(error.statusCode || 500)
      .send({ message: error.message || error.sqlMessage })
    }
  }
}

export default UserController

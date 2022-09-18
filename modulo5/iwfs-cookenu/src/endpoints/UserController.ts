import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";
import User, { USER_ROLES } from "../model/User";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

class UserController {
  signupUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;

      if (!name || !email || !password || !role) {
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

      if (role.toUpperCase() !== USER_ROLES.NORMAL && role.toUpperCase() !== USER_ROLES.ADMIN) {
        throw new Error("Usuario só pode ser do tipo normal ou admin")
    }

      const userDB = new UserDataBase();

      const user = await userDB.selectUserByEmail(email);

      if (user) {
        res.statusCode = 400;
        throw new Error("Usuário já existe");
      }

      const generateId = new GenerateId();
      const id = generateId.generateIds();

      const hashManager = new HashManager();
      const hashPassword = await hashManager.createHash(password);

      const newUser = new User(id, name, email, hashPassword, role);
      await userDB.insertUser(newUser);

      const token = new Authenticator().generateToken({ id, role });

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

      const token = new Authenticator().generateToken({ id: user.getId(), role: user.getRole() });

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
        .send({ message: error.message || error.sqlMessage });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const { id } = req.params;

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
        .send({ message: error.message || error.sqlMessage });
    }
  };

  follow = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const { idSeguindo } = req.body;

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

      const userExist = await userDB.selectUserById(idSeguindo);

      if (!userExist) {
        res.statusCode = 404;
        throw new Error(`Usuário com id ${idSeguindo} não existe`);
      }

      await userDB.followPerson(tokenData.id, idSeguindo);

      const user = await userDB.selectUserById(tokenData.id);

      if (!user) {
        res.statusCode = 404;
        throw new Error("Usuário não existe");
      }

      res
        .status(200)
        .send({
          message: `Usuário ${user.getName()} está seguindo ${userExist.getName()} com sucesso!`,
        });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  unfollow = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const { userToUnfollowId } = req.body;

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

      const userExist = await userDB.selectUserById(userToUnfollowId);

      if (!userExist) {
        res.statusCode = 404;
        throw new Error(`Usuário com id ${userToUnfollowId} não existe`);
      }

      await userDB.unfollowPerson(tokenData.id, userToUnfollowId);

      const user = await userDB.selectUserById(tokenData.id);

      if (!user) {
        res.statusCode = 404;
        throw new Error("Usuário não existe");
      }

      res
        .status(200)
        .send({
          message: `Usuário ${user.getName()} deixou de seguir ${userExist.getName()} com sucesso!`,
        });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  getRecipesFeed = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization

      if (!token) {
        res.statusCode = 422;
        throw new Error("Please provid a token");
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.getTokenData(token);

      if (!tokenData) {
        res.statusCode = 401;
        throw new Error("Invalid token");
      }

      const userDB = new UserDataBase();
      const user = await userDB.selectUserById(tokenData.id) // não consegui fazer funcionar

      if (!user) {
          res.statusCode = 404
          throw new Error("User not found")
      }

      const recipes = await userDB.selectRecipesUserFeed(tokenData.id);

      res.status(200).send(recipes);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  
}

export default UserController;

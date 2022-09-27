import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { User, USER_ROLES } from "../models/User";
import UserDatabase from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
  public signup = async (input: any) => {
    const name = input.name;
    const email = input.email;
    const password = input.password;
    const role = input.role;

    if (!name || typeof name !== "string") {
      throw new Error("Parâmetro 'name' inválido");
    }

    if (name.length < 3 || password.length > 6) {
      throw new Error(
        "O nome deve ter no mínimo 3 caracteres e senha no mínimo 6"
      );
    }

    if (!email || typeof email !== "string") {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (!email.includes("@")) {
      throw new Error("Email inválido");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    const user = new User(id, name, email, hashPassword, role);

    const userDataBase = new UserDatabase();
    await userDataBase.createUser(user);

    const token = new Authenticator().generateToken({
      id: user.getId(),
      role: user.getRole(),
    });

    return { message: "Usuário criado com sucesso", token };
  };

  public login = async (input: any) => {
    const email = input.email;
    const password = input.password;

    if (password.length > 6) {
      throw new Error("Senha faltando caracter");
    }

    if (!email || typeof email !== "string") {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (!email.includes("@")) {
      throw new Error("Email inválido");
    }
    const userDB = new UserDatabase();
    const user = await userDB.selectUserByEmail(email);

    const hashManager = new HashManager();
    const comparePassword = await hashManager.compare(
      password,
      user.getPassword()
    );

    if (!user) {
      throw new Error("Usuário não cadastrado");
    }

    if (!comparePassword) {
      throw new Error("Invalid passwordSenha incorreta!");
    }

    const token = new Authenticator().generateToken({
      id: user.getId(),
      role: user.getRole(),
    });

    const response = { message: "Usuário logado com sucesso", token };

    return response;
  };

  public getUsers = async (token: string, name: string) => {
    if (!token) {
      throw new Error("Insira um token.");
    }

    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenPayload(token);

    if (!tokenData) {
      throw new Error("Não autorizado, token inválido");
    }

    const userDB = new UserDatabase();

    if (name) {
      const user = await userDB.selectUserByName(name);
      return;
    } else {
      const users = await userDB.selectUsers();

      return users;
    }
  };

  public deleteUserById = async (id: string, token: string) => {
    try {
      if (!token) {
        throw new Error("Insira um token");
      }

      const authenticator = new Authenticator();
      const idPerson = authenticator.getTokenPayload(token);

      if (idPerson?.role === USER_ROLES.NORMAL) {
        throw new Error("Somente administradores podem deletar usuarios");
      }

      const userDB = new UserDatabase();
      const userId = await userDB.selectUserById(id);

      if (!userId) {
        throw new Error("Pessoa nao Encontrada");
      }

      await userDB.deleteUser(id);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}

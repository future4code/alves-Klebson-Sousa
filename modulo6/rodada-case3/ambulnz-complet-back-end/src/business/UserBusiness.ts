import { UserDatabase } from "../database/UserDatabase";
import { ParamsError } from "../errors/ParamsError";
import { ConflictError } from "../errors/ConflictError";
import {
  IAddressOutputDTO,
  ILoginInputDTO,
  ILoginOutputDTO,
  ISignupInputDTO,
  ISignupOutputDTO,
  User,
  USER_ROLES,
} from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { NotFoundError } from "../errors/NotFoundError";
import { AuthenticationError } from "../errors/AuthenticationError";
import { Address, IAddressInputDTO } from "../models/Address";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private authenticator: Authenticator,
    private hashmanager: HashManager,
    private idGenerator: IdGenerator
  ) {}

  public signup = async (input: ISignupInputDTO) => {
    const { name, email, password } = input;

    if (!name || !email || !password) {
      throw new ParamsError();
    }

    if (typeof name !== "string" || name.length < 3) {
      throw new ParamsError("Parâmetro name inválido.");
    }

    if (typeof email !== "string" || email.length < 3) {
      throw new ParamsError("Parâmetro email inválido.");
    }

    if (typeof password !== "string" || password.length < 6) {
      throw new ParamsError(
        "A senha deve ser uma string de no mínimo 6 caracteres."
      );
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new ParamsError("Parâmetro email inválido.");
    }

    const userDB = await this.userDatabase.findUserByEmail(email);

    if (userDB) {
      throw new ConflictError("E-mail ou usuário já cadastrado");
    }

    const id = this.idGenerator.generate();

    const hashPassword = await this.hashmanager.hash(password);

    const newUser = new User(id, name, email, hashPassword, USER_ROLES.NORMAL);

    const payload: ITokenPayload = {
      id: newUser.getId(),
      role: newUser.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    await this.userDatabase.createUser(newUser);

    // const addressExists = await this.userDatabase.findAddressById(id)

    const response: ISignupOutputDTO = {
      message: "Cadastro realizado com sucesso",
      token,
      user: {
        id: newUser.getId(),
        name: newUser.getName(),
        email: newUser.getEmail(),
        role: newUser.getRole(),
        hasAddress: false,
      },
    };
    return response;
  };

  public address = async (input: IAddressInputDTO) => {
    const { token, street, number, neighbourhood, city, state, complement } =
      input;

    if (!street || !number || !neighbourhood || !city || !state) {
      throw new ParamsError();
    }

    const payload = this.authenticator.getTokenPayload(token);

    console.log(payload)

    if (!payload) {
      throw new ParamsError("Token inválido");
    }

    const userDB = await this.userDatabase.findUserById(payload.id);

    if (!userDB) {
      throw new NotFoundError("Usuário não encontrado")
    }

    const userId = payload.id;

    const addressDB = await this.userDatabase.findAddressById(userId);

    const address = new Address(
      userId,
      street,
      number,
      neighbourhood,
      city,
      state,
      complement
    );

    const newpayload: ITokenPayload = {
      id: payload.id,
      role: payload.role,
    };

    const newtoken = this.authenticator.generateToken(newpayload);

    if (!addressDB) {
      await this.userDatabase.registerAddress(address);
      const response: IAddressOutputDTO = {
        message: "Cadastrado com sucesso",
        token: newtoken,
        address: {
          id: payload.id,
          street,
          number,
          neighbourhood,
          city,
          state,
          complement,
          hasAddress: true,
        },
      };
      return response;
    } else {
      await this.userDatabase.updateAddress(userId, address);
      const response: IAddressOutputDTO = {
        message: "Atualizado com sucesso",
        token: newtoken,
        address: {
          id: payload.id,
          street,
          number,
          neighbourhood,
          city,
          state,
          complement,
          hasAddress: true,
        },
      };
      return response;
    }
  };

  public login = async (input: ILoginInputDTO) => {
    const { email, password } = input;

    if (!email || !password) {
      throw new ParamsError();
    }

    if (typeof email !== "string" || email.length < 3) {
      throw new ParamsError("Parâmetro email inválido.");
    }

    if (typeof password !== "string" || password.length < 6) {
      throw new ParamsError(
        "A senha deve ser uma string de no mínimo 6 caracteres."
      );
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new ParamsError("Parâmetro email inválido.");
    }

    const userDB = await this.userDatabase.findUserByEmail(email);

    if (!userDB) {
      throw new NotFoundError("Senha ou email inválidos.");
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role
    );

    const isCorrectPassword = await this.hashmanager.compare(
      password,
      user.getPassword()
    );

    if (!isCorrectPassword) {
      throw new AuthenticationError("Senha ou email inválidos.");
    }

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const addressDB = await this.userDatabase.findAddressById(payload.id);

    let hasAddressDB 

    if (!addressDB) {
      hasAddressDB = false
    }else hasAddressDB = true

    const token = this.authenticator.generateToken(payload);

    const response: ILoginOutputDTO = {
      token,
      message: `Bem vindo ${user.getName()}`,
      user: {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        role: user.getRole(),
        hasAddress: hasAddressDB
      },
    };

    return response;
  };
}

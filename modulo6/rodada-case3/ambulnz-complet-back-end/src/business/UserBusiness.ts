import { UserDatabase } from "../database/UserDatabase";
import { ParamsError } from "../errors/ParamsError";
import { ConflictError } from "../errors/ConflictError";
import { ILoginInputDTO, ISignupInputDTO, ISignupOutputDTO, User, USER_ROLES } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { NotFoundError } from "../errors/NotFoundError";
import { AuthenticationError } from "../errors/AuthenticationError";

export class UserBusiness {
    constructor (
        private userDatabase: UserDatabase,
        private authenticator: Authenticator,
        private hashmanager: HashManager,
        private idGenerator: IdGenerator
    ) {}

    public signup = async (input: ISignupInputDTO) => {
        const { name, email, password} = input

        if (!name || !email || !password) {
            throw new ParamsError();
          }

        if (typeof name !== "string" || name.length < 3) {
            throw new ParamsError("Parâmetro name inválido.")
        }

        if (typeof email !== "string" || email.length < 3) {
            throw new ParamsError("Parâmetro email inválido.")
        }

        if (typeof password !== "string" || password.length < 6) {
            throw new ParamsError("A senha deve ser uma string de no mínimo 6 caracteres.");
        }
        
        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new ParamsError("Parâmetro email inválido.")
        }

          const userDB = await this.userDatabase.findUserByEmail(email)

          if (userDB) {
            throw new ConflictError("E-mail já cadastrado")
          }

          const id = this.idGenerator.generate()

          const hashPassword = await this.hashmanager.hash(password)

          const user = new User(
            id,
            name,
            email,
            hashPassword,
            USER_ROLES.ADMIN
          )

          await this.userDatabase.createUser(user)

          const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
          }

          const token = this.authenticator.generateToken(payload)

          const response: ISignupOutputDTO = {
            message: "Cadastro realizado com sucesso",
            token
          }
          
          return response
    }

    public login = async (input: ILoginInputDTO) => {
        const {email, password} = input

        if (!email || !password) {
            throw new ParamsError();
          }

          if (typeof email !== "string" || email.length < 3) {
            throw new ParamsError("Parâmetro email inválido.")
        }

        if (typeof password !== "string" || password.length < 6) {
            throw new ParamsError("A senha deve ser uma string de no mínimo 6 caracteres.");
          }
          
          if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
              throw new ParamsError("Parâmetro email inválido.")
          }

          const userDB = await this.userDatabase.findUserByEmail(email)
          
          if (!userDB) {
              throw new NotFoundError("usuário não encontrado")
            }

            const user = new User(
                userDB.id,
                userDB.name,
                userDB.email,
                userDB.password,
                userDB.role
            )
          
            const isCorrectPassword = await this.hashmanager.compare(password, user.getPassword())

            if (!isCorrectPassword) {
                throw new AuthenticationError("Senha ou email incorretos.")
            }

            const payload: ITokenPayload = {
                id: user.getId(),
                role: user.getRole()
              }

            const token = this.authenticator.generateToken(payload)

            return {message: "Logado com sucesso", token}

    }
}
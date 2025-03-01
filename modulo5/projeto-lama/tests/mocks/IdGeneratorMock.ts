import { USER_ROLES } from "../../src/models/User"

export class IdGeneratorMock {
    public generate = (): string => {
        if(USER_ROLES.ADMIN){
            return "id-mock-admin"
        }
        return "id-mock"
    }
}

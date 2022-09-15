import {v4} from "uuid"


export class GenerateId {
    generateId = (): string => {
        return v4()
    }
}


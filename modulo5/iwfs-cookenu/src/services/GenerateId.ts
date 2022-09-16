import {v4} from "uuid"


export class GenerateId {
    generateIds = (): string => {
        console.log("generate")
        return v4()
    }
}


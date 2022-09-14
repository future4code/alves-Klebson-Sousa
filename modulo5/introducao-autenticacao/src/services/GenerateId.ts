import {v4} from "uuid"

// 1.b)

export class GenerateId {
    generateId = (): string => {
        return v4()
    }
}
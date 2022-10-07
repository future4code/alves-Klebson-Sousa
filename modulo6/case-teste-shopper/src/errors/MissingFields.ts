import { BaseError } from "./BaseError";

export class MissingFields extends BaseError {
    constructor(
        message: string = "Some parameter missing" 
        ) {
        super(422, message)
    }
}
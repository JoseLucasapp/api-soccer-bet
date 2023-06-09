import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.createUserUseCase.execute(request.body)

            return response.status(201).json({})
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error'
            })
        }
    }
}
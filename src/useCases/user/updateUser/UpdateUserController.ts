import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.updateUserUseCase.execute(parseInt(request.params.id), request.body)
            return response.status(200).json({})
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error'
            })
        }
    }
}
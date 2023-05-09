import { Request, Response } from "express";
import { CreateSoccerGameUseCase } from "./CreateSoccerGameUseCase";

export class CreateSoccerGameController {
    constructor(private createSoccerGameUseCase: CreateSoccerGameUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.createSoccerGameUseCase.execute(request.body)

            return response.status(201).json({})
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error'
            })
        }
    }
}
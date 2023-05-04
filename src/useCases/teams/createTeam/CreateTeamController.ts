import { Request, Response } from "express";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

export class CreateTeamController {
    constructor(private createTeamUseCase: CreateTeamUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.createTeamUseCase.execute(request.body)

            return response.status(201).json({})
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error'
            })
        }
    }
}
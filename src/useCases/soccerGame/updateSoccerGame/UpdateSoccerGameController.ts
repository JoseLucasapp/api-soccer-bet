import { Request, Response } from "express";
import { UpdateSoccerGameUseCase } from "./UpdateSoccerGameUseCase";

export class UpdateTeamController {
    constructor(private updateSoccerGameUseCase: UpdateSoccerGameUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.updateSoccerGameUseCase.execute(parseInt(request.params.id), request.body)
            return response.status(200).json({})
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error'
            })
        }
    }
}
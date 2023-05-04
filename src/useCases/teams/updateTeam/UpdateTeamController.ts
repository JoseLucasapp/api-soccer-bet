import { Request, Response } from "express";
import { UpdateTeamUseCase } from "./UpdateTeamUseCase";

export class UpdateTeamController {
    constructor(private updateTeamUseCase: UpdateTeamUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.updateTeamUseCase.execute(parseInt(request.params.id), request.body)
            return response.status(200).json({})
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error'
            })
        }
    }
}
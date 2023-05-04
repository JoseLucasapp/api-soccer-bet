import { Request, Response } from "express";
import { DeleteTeamUseCase } from "./DeleteTeamUseCase";

export class DeleteTeamController {
    constructor(private deleteTeamUseCase: DeleteTeamUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            await this.deleteTeamUseCase.execute(parseInt(request.params.id))

            return response.status(200).json({})
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error'
            })
        }
    }
}
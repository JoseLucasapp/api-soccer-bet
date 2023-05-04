import { Request, Response } from "express";
import { FindByIdUseCase } from "./FindByIdUseCase";

export class FindByIdController {
    constructor(private findByIdUseCase: FindByIdUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const team = await this.findByIdUseCase.execute(parseInt(request.params.id))
            return response.status(200).json(team)
        } catch (error) {
            return response.status(500).json({
                message: error || 'Unexpected error'
            })
        }
    }
}
import { Request, Response } from "express";
import { FindByUserIdUseCase } from "./FindByUserIdUseCase";

export class FindByUserIdController {
    constructor(private findByUserIdUseCase: FindByUserIdUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const bet = await this.findByUserIdUseCase.execute(parseInt(request.params.id))
            return response.status(200).json(bet)
        } catch (error) {
            return response.status(500).json({
                message: error || 'Unexpected error'
            })
        }
    }
}
import { Request, Response } from "express";
import { DeleteBetUseCase } from "./DeleteBetUseCase";

export class DeleteBetController {
    constructor(private deleteBetUseCase: DeleteBetUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            await this.deleteBetUseCase.execute(parseInt(request.params.id))

            return response.status(200).json({})
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error'
            })
        }
    }
}
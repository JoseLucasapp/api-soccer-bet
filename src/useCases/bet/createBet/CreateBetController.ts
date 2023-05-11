import { Request, Response } from "express";
import { CreateBetUseCase } from "./CreateBetUseCase";

export class CreateBetController {
    constructor(private createBetUseCase: CreateBetUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.createBetUseCase.execute(request.body)

            return response.status(201).json({})
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error'
            })
        }
    }
}
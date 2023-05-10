import { Request, Response } from "express";
import { FindAllUseCase } from "./FindAllUseCase";

export class FindAllController {
    constructor(private findAllUseCase: FindAllUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const user = await this.findAllUseCase.execute()
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json({
                message: error || 'Unexpected error'
            })
        }
    }
}
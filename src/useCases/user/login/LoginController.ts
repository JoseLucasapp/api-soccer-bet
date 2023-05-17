import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
    constructor(private loginUseCase: LoginUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const user = await this.loginUseCase.execute(request.body)
            if (user == 'Incorrect password') return response.status(400).json({ msg: user })
            if (user == 'Not found') return response.status(404).json({ msg: user })
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json({
                message: error || 'Unexpected error'
            })
        }
    }
}
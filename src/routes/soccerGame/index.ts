import { Request, Response, Router } from "express";
import { controller } from "../../useCases/soccerGame/findAll";

export default (router: Router) => {
    router.get('/soccer-game', (request: Request, response: Response) => {
        return controller.handle(request, response)
    })
}
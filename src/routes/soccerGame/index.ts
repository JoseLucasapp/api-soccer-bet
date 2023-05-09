import { Request, Response, Router } from "express";
import { controllerFindAllSoccerGame } from "../../useCases/soccerGame/findAll";
import { controllerFindByIdSoccerGame } from "../../useCases/soccerGame/findById";
import { controllerUpdateSoccerGame } from "../../useCases/soccerGame/updateSoccerGame";
import { controllerCreateSoccerGame } from "../../useCases/soccerGame/createSoccerGame";

export default (router: Router) => {
    router.post('/soccer-game', (request: Request, response: Response) => {
        return controllerCreateSoccerGame.handle(request, response)
    })

    router.get('/soccer-game', (request: Request, response: Response) => {
        return controllerFindAllSoccerGame.handle(request, response)
    })

    router.get('/soccer-game/:id', (request: Request, response: Response) => {
        return controllerFindByIdSoccerGame.handle(request, response)
    })

    router.put('/soccer-game/:id', (request: Request, response: Response) => {
        return controllerUpdateSoccerGame.handle(request, response)
    })
}
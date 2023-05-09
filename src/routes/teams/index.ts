import { Request, Response, Router } from "express";
import { controllerCreateTeam } from "../../useCases/teams/createTeam";
import { controllerFindByIdTeam } from "../../useCases/teams/findById";
import { controllerUpdateTeam } from "../../useCases/teams/updateTeam";
import { controllerDeleteTeam } from "../../useCases/teams/deleteTeam";

export default (router: Router) => {
    router.post('/teams', (request: Request, response: Response) => {
        return controllerCreateTeam.handle(request, response)
    })

    router.get('/teams/:id', (request: Request, response: Response) => {
        return controllerFindByIdTeam.handle(request, response)
    })

    router.put('/teams/:id', (request: Request, response: Response) => {
        return controllerUpdateTeam.handle(request, response)
    })

    router.delete('/teams/:id', (request: Request, response: Response) => {
        return controllerDeleteTeam.handle(request, response)
    })
}
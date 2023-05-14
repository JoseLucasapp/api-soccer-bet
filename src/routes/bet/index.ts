import { NextFunction, Request, Response, Router } from "express";
import { controllerCreateBet } from "../../useCases/bet/createBet";
import { UserTypeEnum } from "../../helpers/types";
import { validadeJwt } from "../../middleware/loginAuth";
import { controllerFindByIdBet } from "../../useCases/bet/findById";
import { controllerFindAllBet } from "../../useCases/bet/findAll";
import { controllerDeleteBet } from "../../useCases/bet/deleteBet";
import { controllerFindByUserIdBet } from "../../useCases/bet/findByUserId";

export default (router: Router) => {
    router.post('/bet', [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next, [UserTypeEnum.USER])], controllerCreateBet.handle)
    router.delete('/bet/:id', [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next, [UserTypeEnum.USER])], controllerDeleteBet.handle)

    router.get('/bet', (request: Request, response: Response) => {
        return controllerFindAllBet.handle(request, response)
    })

    router.get('/bet/:id', (request: Request, response: Response) => {
        return controllerFindByIdBet.handle(request, response)
    })
    router.get('/bet/:userId', (request: Request, response: Response) => {
        return controllerFindByUserIdBet.handle(request, response)
    })
}
import { NextFunction, Request, Response, Router } from "express";
import { controllerCreateUser } from "../../useCases/user/createUser";
import { controllerFindAllUser } from "../../useCases/user/findAll";
import { controllerFindByIdUser } from "../../useCases/user/findById";
import { controllerUpdateUser } from "../../useCases/user/updateUser";
import { controllerDeleteUser } from "../../useCases/user/deleteUser";
import { controllerLogin } from "../../useCases/user/login";
import { validadeJwt } from "../../middleware/loginAuth";
import { UserTypeEnum } from "../../helpers/types";

export default (router: Router) => {

    router.post('/login', (request: Request, response: Response) => {
        return controllerLogin.handle(request, response)
    })

    router.get('/user', [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next, [UserTypeEnum.USER])], controllerFindAllUser.handle)

    router.post('/user', (request: Request, response: Response) => {
        return controllerCreateUser.handle(request, response)
    })

    router.get('/user/:id', [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next, [UserTypeEnum.USER])], controllerFindByIdUser.handle)

    router.put('/user/:id', [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next, [UserTypeEnum.USER])], controllerUpdateUser.handle)

    router.delete('/user/:id', [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next, [UserTypeEnum.USER])], controllerDeleteUser.handle)
}
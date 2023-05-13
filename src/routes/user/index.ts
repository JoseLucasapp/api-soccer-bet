import { Request, Response, Router } from "express";
import { controllerCreateUser } from "../../useCases/user/createUser";
import { controllerFindAllUser } from "../../useCases/user/findAll";
import { controllerFindByIdUser } from "../../useCases/user/findById";
import { controllerUpdateUser } from "../../useCases/user/updateUser";
import { controllerDeleteUser } from "../../useCases/user/deleteUser";
import { controllerLogin } from "../../useCases/user/login";

export default (router: Router) => {

    router.post('/login', (request: Request, response: Response) => {
        return controllerLogin.handle(request, response)
    })

    router.post('/user', (request: Request, response: Response) => {
        return controllerCreateUser.handle(request, response)
    })

    router.get('/user', (request: Request, response: Response) => {
        return controllerFindAllUser.handle(request, response)
    })

    router.get('/user/:id', (request: Request, response: Response) => {
        return controllerFindByIdUser.handle(request, response)
    })

    router.put('/user/:id', (request: Request, response: Response) => {
        return controllerUpdateUser.handle(request, response)
    })

    router.delete('/user/:id', (request: Request, response: Response) => {
        return controllerDeleteUser.handle(request, response)
    })
}
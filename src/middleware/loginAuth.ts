import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../helpers/jwt";
import { MessageTextOptions, UserTypeEnum } from "../helpers/types";

export const validadeJwt = (req: Request, res: Response, next: NextFunction, UserTypeEnum: UserTypeEnum[]) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({
            error: {
                message: MessageTextOptions.invalidToken,
            },
        })
    }
    const user = verifyToken(authorization)
    if (!user) {
        return res.status(401).json({
            error: {
                message: MessageTextOptions.invalidToken,
            },
        })
    }
    if (!UserTypeEnum.includes(user.role)) {
        return res.status(401).json({
            error: {
                message: MessageTextOptions.accessDenied,
            },
        })
    }
    req.params.userId = String(user.id)
    req.params.userRole = String(user.role)
    next()
}
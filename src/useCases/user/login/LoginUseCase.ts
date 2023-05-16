import { User } from "../../../entities/user";
import { generateToken } from "../../../helpers/jwt";
import { UserTypeEnum } from "../../../helpers/types";
import { createHashData } from "../../../helpers/utils";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class LoginUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(data: User) {
        const pass = createHashData(data.dataValues.password)
        const user = await this.userRepository.findAll(`email = ${data.dataValues.email} and password = ${pass}`)

        if (user.length <= 0) {
            const userPass = await this.userRepository.findAll(`email = ${data.dataValues.email}`)
            if (userPass) {
                throw new Error('Incorrect password')
            }
            throw new Error('Not found')
        }

        const token = await generateToken({
            id: user[0].dataValues.id as number,
            email: user[0].dataValues.email,
            username: user[0].dataValues.username,
            role: user[0].dataValues.role as UserTypeEnum
        })

        return { user, token }
    }
}
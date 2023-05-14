import { User } from "../../../entities/user";
import { generateToken } from "../../../helpers/jwt";
import { UserTypeEnum } from "../../../helpers/types";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class LoginUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(data: User) {
        const user = await this.userRepository.findAll(`email = ${data.email} and password = ${data.password}`)

        if (user.length <= 0) {
            const userPass = await this.userRepository.findAll(`email = ${data.email}`)
            if (userPass) {
                throw new Error('Incorrect password')
            }
            throw new Error('Not found')
        }

        const token = await generateToken({
            id: user[0].id,
            email: user[0].email,
            username: user[0].username,
            role: user[0].role as UserTypeEnum
        })

        return { user, token }
    }
}
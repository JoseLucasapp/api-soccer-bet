import { User } from "../../../entities/user";
import { UserTypeEnum } from "../../../helpers/types";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class UpdateUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(id: number, data: User) {
        const user = await this.userRepository.findById(id)
        const toUpdate = new User({
            username: data.username || user?.dataValues.username,
            password: data.password || user?.dataValues.password,
            email: data.email || user?.dataValues.email,
            points: data.points || user?.dataValues.points,
            wins: data.wins || user?.dataValues.wins,
            role: UserTypeEnum.USER,
        })
        console.log(toUpdate)
        await this.userRepository.updateUser(id, toUpdate)
    }
}
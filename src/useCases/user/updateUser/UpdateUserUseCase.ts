import { User } from "../../../entities/user";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class UpdateUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(id: number, data: User) {
        await this.userRepository.updateUser(id, data)
    }
}
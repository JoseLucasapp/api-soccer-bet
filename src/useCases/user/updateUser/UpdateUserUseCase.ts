import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { User } from "../../../entities/user";

export class UpdateUserUseCase {
    constructor(private userRepository: inMemoryUserRepository) { }

    async execute(id: number, data: User) {
        await this.userRepository.updateUser(id, data)
    }
}
import { inMemoryUserRepository } from "../../../../test/in-memory-user-repository";

export class DeleteUserUseCase {
    constructor(private userRepository: inMemoryUserRepository) { }

    async execute(id: number) {
        return await this.userRepository.deleteUser(id)
    }
}
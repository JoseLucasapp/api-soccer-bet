import { IUserRepository } from "../../../repositories/IUserRepository";

export class DeleteUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(id: number) {
        return await this.userRepository.deleteUser(id)
    }
}
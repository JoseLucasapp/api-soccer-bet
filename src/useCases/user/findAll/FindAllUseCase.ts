import { IUserRepository } from "../../../repositories/IUserRepository";

export class FindAllUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute() {
        return await this.userRepository.findAll()
    }
}
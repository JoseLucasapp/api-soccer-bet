import { IUserRepository } from "../../../repositories/IUserRepository";

export class FindByIdUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(id: number) {
        return await this.userRepository.findById(id)
    }
}
import { IUserRepository } from "../../../repositories/IUserRepository";

export class FindAllUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(query: any) {
        return await this.userRepository.findAll(query)
    }
}
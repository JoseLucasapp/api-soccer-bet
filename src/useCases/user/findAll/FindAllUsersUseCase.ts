import { FindAllQueryInterface } from "../../../helpers/types";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class FindAllUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(query = {}) {
        return await this.userRepository.find(query)
    }
}
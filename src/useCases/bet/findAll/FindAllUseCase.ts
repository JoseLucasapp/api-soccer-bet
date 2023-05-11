import { IBetRepository } from "../../../repositories/IBetRepository";

export class FindAllUseCase {
    constructor(private betRepository: IBetRepository) { }

    async execute() {
        return await this.betRepository.findAll()
    }
}
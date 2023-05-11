import { IBetRepository } from "../../../repositories/IBetRepository";

export class FindByIdUseCase {
    constructor(private betRepository: IBetRepository) { }

    async execute(id: number) {
        return await this.betRepository.findById(id)
    }
}
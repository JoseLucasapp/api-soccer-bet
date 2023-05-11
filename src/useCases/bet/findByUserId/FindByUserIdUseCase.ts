import { IBetRepository } from "../../../repositories/IBetRepository";

export class FindByUserIdUseCase {
    constructor(private betRepository: IBetRepository) { }

    async execute(id: number) {
        return await this.betRepository.findByUserId(id)
    }
}
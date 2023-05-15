import { IBetRepository } from "../../../repositories/IBetRepository";

export class DeleteBetUseCase {
    constructor(private betRepository: IBetRepository) { }

    async execute(id: number) {
        return await this.betRepository.deleteBet(id)
    }
}
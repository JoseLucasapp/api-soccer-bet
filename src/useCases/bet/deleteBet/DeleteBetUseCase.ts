import { inMemoryBetRepository } from "../../../../test/in-memory-bet-repository";

export class DeleteBetUseCase {
    constructor(private betRepository: inMemoryBetRepository) { }

    async execute(id: number) {
        return await this.betRepository.deleteBet(id)
    }
}
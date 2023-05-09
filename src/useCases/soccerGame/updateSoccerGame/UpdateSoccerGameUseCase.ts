import { inMemorySoccerGameRepository } from "../../../../test/in-memory-soccergame-repository";
import { SoccerGame } from "../../../entities/soccerGame";

export class UpdateSoccerGameUseCase {
    constructor(private soccerGameRepository: inMemorySoccerGameRepository) { }

    async execute(id: number, data: SoccerGame) {
        await this.soccerGameRepository.updateTeam(id, data)
    }
}
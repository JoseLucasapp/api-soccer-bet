import { SoccerGame } from "../../../entities/soccerGame";
import { ISoccerGameRepository } from "../../../repositories/ISoccerGameRepository";

export class UpdateSoccerGameUseCase {
    constructor(private soccerGameRepository: ISoccerGameRepository) { }

    async execute(id: number, data: SoccerGame) {
        await this.soccerGameRepository.updateTeam(id, data)
    }
}
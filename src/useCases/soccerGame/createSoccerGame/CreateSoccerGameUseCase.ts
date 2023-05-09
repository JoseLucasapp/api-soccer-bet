import { SoccerGame } from "../../../entities/soccerGame";
import { ISoccerGameRepository } from "../../../repositories/ISoccerGameRepository";
import { ICreateSoccerGameAttributesRequestDTO } from "./CreateSoccerGameDTO";

export class CreateSoccerGameUseCase {
    constructor(private soccerGameRepository: ISoccerGameRepository) { }

    async execute(data: ICreateSoccerGameAttributesRequestDTO) {
        const soccerGame = new SoccerGame(data)

        await this.soccerGameRepository.save(soccerGame)
    }
}
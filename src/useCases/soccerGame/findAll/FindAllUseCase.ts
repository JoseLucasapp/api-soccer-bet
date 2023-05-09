import { ISoccerGameRepository } from "../../../repositories/ISoccerGameRepository";

export class FindAllUseCase {
    constructor(private soccerGameRepository: ISoccerGameRepository) { }

    async execute() {
        return await this.soccerGameRepository.findAll()
    }
}
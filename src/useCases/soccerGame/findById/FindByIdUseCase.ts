import { ISoccerGameRepository } from "../../../repositories/ISoccerGameRepository";

export class FindByIdUseCase {
    constructor(private soccerGameRepository: ISoccerGameRepository) { }

    async execute(id: number) {
        return await this.soccerGameRepository.findById(id)
    }
}
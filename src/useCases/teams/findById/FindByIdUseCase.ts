import { ITeamsRepository } from "../../../repositories/ITeamsRepository";

export class FindByIdUseCase {
    constructor(private teamsRepository: ITeamsRepository) { }

    async execute(id: number) {
        return await this.teamsRepository.findById(id)
    }
}
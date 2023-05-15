import { ITeamsRepository } from "../../../repositories/ITeamsRepository";

export class DeleteTeamUseCase {
    constructor(private teamRepository: ITeamsRepository) { }

    async execute(id: number) {
        return await this.teamRepository.deleteTeam(id)
    }
}
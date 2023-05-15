import { Team } from "../../../entities/team";
import { ITeamsRepository } from "../../../repositories/ITeamsRepository";

export class UpdateTeamUseCase {
    constructor(private teamRepository: ITeamsRepository) { }

    async execute(id: number, data: Team) {
        await this.teamRepository.updateTeam(id, data)
    }
}
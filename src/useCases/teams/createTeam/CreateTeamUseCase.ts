import { Team } from "../../../entities/team";
import { ITeamsRepository } from "../../../repositories/ITeamsRepository";

export class CreateTeamUseCase {
    constructor(private teamsRepository: ITeamsRepository) { }

    async execute(data: ICreateTeamAttributesRequestDTO) {
        const team = new Team(data)

        await this.teamsRepository.save(team)
    }
}
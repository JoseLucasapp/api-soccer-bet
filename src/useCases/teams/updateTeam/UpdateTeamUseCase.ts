import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository";
import { Team } from "../../../entities/team";

export class UpdateTeamUseCase {
    constructor(private teamRepository: inMemoryTeamsRepository) { }

    async execute(id: number, data: Team) {
        await this.teamRepository.updateTeam(id, data)
    }
}
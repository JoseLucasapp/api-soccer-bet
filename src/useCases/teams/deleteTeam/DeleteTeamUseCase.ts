import { inMemoryTeamsRepository } from "../../../../test/in-memory-teams-repository";

export class DeleteTeamUseCase {
    constructor(private teamRepository: inMemoryTeamsRepository) { }

    async execute(id: number) {
        return await this.teamRepository.deleteTeam(id)
    }
}
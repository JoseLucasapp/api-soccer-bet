import { Team } from "../src/entities/team";
import { ITeamsRepository } from "../src/repositories/ITeamsRepository";

export class inMemoryTeamsRepository implements ITeamsRepository {
    public teams: Team[] = []

    async findById(id: number): Promise<Team | null> {
        const team = this.teams.find(b => b.id === id)

        if (!team) return null

        return team
    }

    async save(data: Team): Promise<void> {
        this.teams.push(data)
    }

    async deleteTeam(id: number): Promise<void> {
        const team = this.teams.find(b => b.id === id)
        const position = this.teams.indexOf(team as Team)
        this.teams.splice(position, 1)
    }

    async updateTeam(id: number, data: Team): Promise<void> {
        const team = this.teams.find(b => b.id === id)
        const position = this.teams.indexOf(team as Team)
        this.teams[position] = data
    }
}
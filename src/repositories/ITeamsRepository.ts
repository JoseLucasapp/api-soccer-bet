import { Team } from "../entities/team";

export interface ITeamsRepository {
    findById(id: number): Promise<Team | null>
    save(data: Team): Promise<void>
    deleteTeam(id: number): Promise<void>
    updateTeam(id: number, data: Team): Promise<void>
}
import { Team } from "../../entities/team";
import { ITeamsRepository } from "../../repositories/ITeamsRepository";

export class PostgresTeamsRepository implements ITeamsRepository {
    async findById(id: number): Promise<Team | null> {
        return await Team.findByPk(id)
    }

    async save(data: Team): Promise<void> {
        await Team.create({ ...data.dataValues })
    }

    async deleteTeam(id: number): Promise<void> {
        await Team.destroy({ where: { id: id } })
    }

    async updateTeam(id: number, data: Team): Promise<void> {
        await Team.update(data.dataValues, { where: { id: id } })
    }
}
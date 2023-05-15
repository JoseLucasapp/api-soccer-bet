import { SoccerGame } from "../../entities/soccerGame";
import { ISoccerGameRepository } from "../../repositories/ISoccerGameRepository";

export class PostgresSoccerGameRepository implements ISoccerGameRepository {
    async findAll(): Promise<SoccerGame[]> {
        return SoccerGame.findAll()
    }

    async findById(id: number): Promise<SoccerGame | null> {
        return await SoccerGame.findByPk(id)
    }

    async save(data: SoccerGame): Promise<void> {
        await SoccerGame.create({ ...data.dataValues })
    }

    async updateTeam(id: number, data: SoccerGame): Promise<void> {
        await SoccerGame.update({ ...data.dataValues }, { where: { id: id } })
    }
}
import { Bet } from "../../entities/bet";
import { IBetRepository } from "../../repositories/IBetRepository";

export class PostgresBetsRepository implements IBetRepository {
    async findAll(): Promise<Bet[]> {
        return await Bet.findAll()
    }

    async findById(id: number): Promise<Bet | null> {
        return await Bet.findByPk(id)
    }

    async save(data: Bet): Promise<void> {
        await Bet.create({ ...data.dataValues })
    }

    async deleteBet(id: number): Promise<void> {
        await Bet.destroy({ where: { id: id } })
    }

    async findByUserId(userid: number): Promise<Bet[]> {
        return await Bet.findAll({ where: { user_id: userid } })
    }
}
import { User } from "../../entities/user";
import { createHashData } from "../../helpers/utils";
import { IUserRepository } from "../../repositories/IUserRepository";

export class PostgresUsersRepository implements IUserRepository {
    async findAll(query: any): Promise<User[]> {
        return await User.findAll({ where: query })
    }

    async findById(id: number): Promise<User | null> {
        return await User.findByPk(id)
    }

    async save(data: User): Promise<void> {
        const pass = createHashData(data.dataValues.password)
        await User.create({ ...data.dataValues, password: pass })
    }

    async updateUser(id: number, data: User): Promise<void> {
        await User.update({ ...data.dataValues }, { where: { id: id } })
    }

    async deleteUser(id: number): Promise<void> {
        await User.destroy({ where: { id: id } })
    }
}
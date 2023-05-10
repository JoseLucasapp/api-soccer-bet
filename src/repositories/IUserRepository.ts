import { User } from "../entities/user";

export interface IUserRepository {
    findById(id: number): Promise<User | null>
    save(data: User): Promise<void>
    deleteUser(id: number): Promise<void>
    updateUser(id: number, data: User): Promise<void>
    findAll(): Promise<User[]>
}
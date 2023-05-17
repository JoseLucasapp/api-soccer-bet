import { User } from "../entities/user";

export interface IUserRepository {
    findById(id: number): Promise<User | null>;
    find(query: any): Promise<User[]>;
    save(data: User): Promise<void>;
    deleteUser(id: number): Promise<void>;
    updateUser(id: number, data: User): Promise<void>;
}
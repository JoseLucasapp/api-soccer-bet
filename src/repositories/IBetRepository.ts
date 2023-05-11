import { Bet } from "../entities/bet"

export interface IBetRepository {
    findById(id: number): Promise<Bet | null>
    findByUserId(userid: number): Promise<Bet | null>
    save(data: Bet): Promise<void>
    deleteBet(id: number): Promise<void>
    findAll(): Promise<Bet[]>
}
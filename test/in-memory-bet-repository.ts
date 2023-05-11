import { Bet } from "../src/entities/bet";
import { IBetRepository } from "../src/repositories/IBetRepository";

export class inMemoryBetRepository implements IBetRepository {
    public bets: Bet[] = []

    async save(data: Bet): Promise<void> {
        this.bets.push(data)
    }

    async findById(id: number): Promise<Bet | null> {
        const bet = this.bets.find(b => b.id === id)

        if (!bet) return null

        return bet
    }
    async findByUserId(userId: number): Promise<Bet | null> {
        const bet = this.bets.find(b => b.user_id === userId)

        if (!bet) return null

        return bet
    }

    async findAll(): Promise<Bet[]> {
        return this.bets
    }

    async deleteBet(id: number): Promise<void> {
        const bet = this.bets.find(b => b.id === id)
        const position = this.bets.indexOf(bet as Bet)
        this.bets.splice(position, 1)
    }
}
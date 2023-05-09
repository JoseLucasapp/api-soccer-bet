import { SoccerGame } from "../src/entities/soccerGame";
import { ISoccerGameRepository } from "../src/repositories/ISoccerGameRepository";

export class inMemorySoccerGameRepository implements ISoccerGameRepository {
    public soccerGames: SoccerGame[] = []

    async save(data: SoccerGame): Promise<void> {
        this.soccerGames.push(data)
    }

    async updateTeam(id: number, data: SoccerGame): Promise<void> {
        const soccerGame = this.soccerGames.find(b => b.id === id)
        const position = this.soccerGames.indexOf(soccerGame as SoccerGame)
        this.soccerGames[position] = data
    }

    async findById(id: number): Promise<SoccerGame | null> {
        const soccerGame = this.soccerGames.find(b => b.id === id)

        if (!soccerGame) return null

        return soccerGame
    }

    async findAll(): Promise<SoccerGame[]> {
        return this.soccerGames
    }
}
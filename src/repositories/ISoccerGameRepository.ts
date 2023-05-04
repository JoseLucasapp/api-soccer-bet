import { SoccerGame } from "../entities/soccerGame"

export interface ISoccerGameRepository {
    findById(id: number): Promise<SoccerGame>
    save(data: SoccerGame): Promise<void>
    updateTeam(id: number): Promise<void>
}
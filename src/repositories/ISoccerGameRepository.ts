import { SoccerGame } from "../entities/soccerGame"

export interface ISoccerGameRepository {
    findById(id: number): Promise<SoccerGame | null>
    save(data: SoccerGame): Promise<void>
    updateTeam(id: number, data: SoccerGame): Promise<void>
    findAll(): Promise<SoccerGame[]>
}
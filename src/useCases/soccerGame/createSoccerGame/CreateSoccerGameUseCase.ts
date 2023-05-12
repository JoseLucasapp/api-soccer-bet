import { SoccerGame } from "../../../entities/soccerGame";
import { Team } from "../../../entities/team";
import { randomNum } from "../../../helpers/utils";
import { ISoccerGameRepository } from "../../../repositories/ISoccerGameRepository";
import { ITeamsRepository } from "../../../repositories/ITeamsRepository";
import { ICreateSoccerGameAttributesRequestDTO } from "./CreateSoccerGameDTO";

export class CreateSoccerGameUseCase {
    constructor(private soccerGameRepository: ISoccerGameRepository
        , private teamsRepository: ITeamsRepository) { }

    async execute(data: ICreateSoccerGameAttributesRequestDTO) {

        const teams = await this.getTeams()

        const soccerGame = new SoccerGame({ ...data, team1: (teams.team1 as Team), team2: (teams.team2 as Team) })

        await this.soccerGameRepository.save(soccerGame)
    }

    async getTeams() {
        const randomTeam1Id = randomNum(10)
        let randomTeam2Id = randomNum(10)

        while (randomTeam2Id === randomTeam1Id) {
            randomTeam2Id = randomNum(10)
        }

        const team1 = await this.teamsRepository.findById(randomTeam1Id)
        const team2 = await this.teamsRepository.findById(randomTeam2Id)

        return { team1, team2 }
    }
}
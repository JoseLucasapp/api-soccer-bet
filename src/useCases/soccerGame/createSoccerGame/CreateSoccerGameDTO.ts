import { Team } from "../../../entities/team";

export interface ICreateSoccerGameAttributesRequestDTO {
    team1: Team;
    team2: Team;
    score1: number;
    score2: number;
    winner: Team;
    odd1: number;
    oddx: number;
    odd2: number;
    done: boolean;
}
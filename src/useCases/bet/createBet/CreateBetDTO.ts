import { SoccerGame } from "../../../entities/soccerGame";

export interface ICreateBetAttributesRequestDTO {
    game_id: number;
    user_id: number;
    betOdd: number;
    total_stake: number;
    potential_return: number;
    winner: boolean;
    done: boolean;
}
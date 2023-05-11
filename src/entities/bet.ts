import { SoccerGame } from "./soccerGame";

interface BetAttributes {
    id?: number;
    game_id: number;
    user_id: number;
    bets: SoccerGame[]
    betOdd: number;
    total_stake: number;
    potential_return: number;
    winner: boolean;
    done: boolean;
}

export class Bet {
    private readonly _id!: number;
    public game_id!: number;
    public user_id!: number;
    public bets!: SoccerGame[]
    public betOdd!: number;
    public total_stake!: number;
    public potential_return!: number;
    public winner!: boolean;
    public done!: boolean;

    get id() {
        return this._id
    }

    constructor(props: BetAttributes, id?: number) {
        this._id = id ?? Math.random()
        Object.assign(this, props)

    }
}
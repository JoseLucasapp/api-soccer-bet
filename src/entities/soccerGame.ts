import { Team } from "./team";

interface SoccerGameAttributes {
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

export class SoccerGame {
    public team1!: Team;
    public team2!: Team;
    public score1!: number;
    public score2!: number;
    public winner!: Team;
    public odd1!: number;
    public oddx!: number;
    public odd2!: number;
    public done!: boolean;

    constructor(props: SoccerGameAttributes) {
        Object.assign(this, props)
    }
}
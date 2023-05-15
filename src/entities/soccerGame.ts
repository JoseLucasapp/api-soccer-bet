import { DataTypes, Model } from "sequelize";
import { Team } from "./team";
import db from "../db/connection";

interface SoccerGameAttributes {
    id?: number;
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

/*export class SoccerGame {
    private readonly _id!: number;
    public team1!: Team;
    public team2!: Team;
    public score1!: number;
    public score2!: number;
    public winner!: Team;
    public odd1!: number;
    public oddx!: number;
    public odd2!: number;
    public done!: boolean;

    get id() {
        return this._id
    }

    constructor(props: SoccerGameAttributes, id?: number) {
        this._id = id ?? Math.random()
        Object.assign(this, props)
    }
}*/

export class SoccerGame extends Model<SoccerGameAttributes>{
    [x: string]: any;
}

SoccerGame.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        team1: {
            type: DataTypes.INTEGER,
            references: {
                model: 'teams',
                key: 'id'
            },
        },
        team2: {
            type: DataTypes.INTEGER,
            references: {
                model: 'teams',
                key: 'id'
            },
        },
        score1: DataTypes.INTEGER,
        score2: DataTypes.INTEGER,
        odd1: DataTypes.FLOAT,
        oddx: DataTypes.FLOAT,
        odd2: DataTypes.FLOAT,
        winner: {
            type: DataTypes.INTEGER,
            references: {
                model: 'teams',
                key: 'id'
            },
        },
        done: DataTypes.BOOLEAN
    }, {
    sequelize: db,
    tableName: 'soccergames'
}
)

SoccerGame.hasMany(Team)
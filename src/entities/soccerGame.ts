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
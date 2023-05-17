import { DataTypes, Model } from "sequelize";
import { TeamModel } from "./team";
import db from "../../db/connection";

interface SoccerGameAttributes {
    id?: number;
    team1: TeamModel;
    team2: TeamModel;
    score1: number;
    score2: number;
    winner: TeamModel;
    odd1: number;
    oddx: number;
    odd2: number;
    done: boolean;
}

export class SoccerGameModel extends Model<SoccerGameAttributes>{
    [x: string]: any;
}

SoccerGameModel.init(
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

SoccerGameModel.hasMany(TeamModel)
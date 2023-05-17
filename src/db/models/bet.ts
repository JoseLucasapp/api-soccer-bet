import { Model } from "sequelize-typescript";
import { SoccerGameModel } from "./soccerGame";
import db from "../../db/connection";
import { DataTypes } from "sequelize";
import { UserModel } from "./user";

interface BetAttributes {
    id?: number;
    game_id: number;
    user_id: number;
    betOdd: number;
    total_stake: number;
    potential_return: number;
    winner: boolean;
    done: boolean;
}

export class BetModel extends Model<BetAttributes>{
    [x: string]: any;
}

BetModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        game_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'soccergames',
                key: 'id'
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            },
        },
        betOdd: DataTypes.FLOAT,
        total_stake: DataTypes.FLOAT,
        potential_return: DataTypes.FLOAT,
        winner: DataTypes.INTEGER,
        done: DataTypes.BOOLEAN
    }, {
    sequelize: db,
    tableName: 'bets'
}
)

BetModel.hasMany(SoccerGameModel)
BetModel.hasMany(UserModel)
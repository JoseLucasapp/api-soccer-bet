import { Model, DataTypes } from "sequelize";
import { SoccerGame } from "./soccerGame";
import db from "../db/connection";
import { User } from "./user";

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

export class Bet extends Model<BetAttributes>{
    [x: string]: any;
}

Bet.init(
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

Bet.hasMany(SoccerGame)
Bet.hasMany(User)
import { Model } from "sequelize-typescript";
import { SoccerGame } from "./soccerGame";
import db from "../db/connection";
import { DataTypes } from "sequelize";
import { User } from "./user";

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

/*export class Bet {
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
}*/

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
        bets: DataTypes.ARRAY,
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
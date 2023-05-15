import { DataTypes, Model } from "sequelize";
import { UserTypeEnum } from "../helpers/types";
import db from "../db/connection";

interface UserAttributes {
    id?: number;
    username: string;
    password: string;
    email: string;
    points?: number;
    wins?: number;
    role: UserTypeEnum;
}

/*export class User {
    private readonly _id!: number;
    public username!: string;
    public password!: string;
    public email!: string;
    public points!: number;
    public wins!: number;
    public role!: string;

    get id() {
        return this._id
    }
    constructor(props: UserAttributes, id?: number) {
        this._id = id ?? Math.random()
        this.points = 0
        this.wins = 0
        Object.assign(this, props)
    }
}*/

export class User extends Model<UserAttributes>{
    [x: string]: any;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        username: DataTypes.CHAR(150),
        password: DataTypes.CHAR(150),
        email: DataTypes.CHAR(150),
        points: DataTypes.NUMBER,
        wins: DataTypes.NUMBER,
        role: DataTypes.CHAR(150),
    }, {
    sequelize: db,
    tableName: 'users'
}
)
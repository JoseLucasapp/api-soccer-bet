import { DataTypes, Model } from "sequelize";
import { UserTypeEnum } from "../../helpers/types";
import db from "../../db/connection";

interface UserAttributes {
    id?: number;
    username: string;
    password: string;
    email: string;
    points?: number;
    wins?: number;
    role: UserTypeEnum;
}

export class UserModel extends Model<UserAttributes>{
    [x: string]: any;
}

UserModel.init(
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
        points: DataTypes.INTEGER,
        wins: DataTypes.INTEGER,
        role: DataTypes.CHAR(150),
    }, {
    sequelize: db,
    tableName: 'users'
}
)
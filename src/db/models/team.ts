import { DataTypes, Model } from "sequelize";
import db from "../../db/connection";

interface TeamAttributes {
    id?: number;
    name: string;
    color1: string;
    color2: string;
    w?: number;
    x?: number;
    l?: number;
    power: number;
}

export class TeamModel extends Model<TeamAttributes>{
    [x: string]: any;
}

TeamModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: DataTypes.CHAR(150),
        color1: DataTypes.CHAR(150),
        color2: DataTypes.CHAR(150),
        w: DataTypes.INTEGER,
        x: DataTypes.INTEGER,
        l: DataTypes.INTEGER,
        power: DataTypes.INTEGER
    }, {
    sequelize: db,
    tableName: 'teams'
}
)
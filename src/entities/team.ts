import { DataTypes, Model } from "sequelize";
import db from "../db/connection";

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

/*export class Team {
    private readonly _id!: number;
    public name!: string;
    public color1!: string;
    public color2!: string;
    public w!: number;
    public x!: number;
    public l!: number;
    public power!: number;

    get id() {
        return this._id
    }

    constructor(props: TeamAttributes, id?: number) {
        this._id = id ?? Math.random()
        this.w = 0
        this.l = 0
        this.x = 0
        Object.assign(this, props)
    }
}*/

export class Team extends Model<TeamAttributes>{
    [x: string]: any;
}

Team.init(
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
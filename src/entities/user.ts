import { UserTypeEnum } from "../helpers/types";

interface UserAttributes {
    id?: number;
    username: string;
    password: string;
    email: string;
    points?: number;
    wins?: number;
    role: UserTypeEnum;
}

export class User {
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
}
interface UserAttributes {
    id?: number;
    username: string;
    password: string;
    email: string;
    points: number;
    wins: number;
}

export class User {
    private readonly _id!: number;
    public username!: string;
    public password!: string;
    public email!: string;
    public points!: number;
    public wins!: number;

    get id() {
        return this._id
    }
    constructor(props: UserAttributes, id?: number) {
        this._id = id ?? Math.random()
        Object.assign(this, props)
    }
}
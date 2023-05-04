interface TeamAttributes {
    id?: number;
    name: string;
    logo: string;
}

export class Team {
    private readonly _id!: number;
    public name!: string;
    public logo!: string;

    get id() {
        return this._id
    }

    constructor(props: TeamAttributes, id?: number) {
        this._id = id ?? Math.random()
        Object.assign(this, props)
    }
}
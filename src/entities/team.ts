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

export class Team {
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
}
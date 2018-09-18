export class Space {
    public name: string;
    public id: string;
    public position: number;
    public price: number;
    public rent: number;
    public multipliedrent: any;
    // public rent0: number;
    // public rent1: number;
    // public rent2: number;
    // public rent3: number;
    // public rent4: number;
    public housecost: number;
    public group: string;
    public ownedby: number;
    public buildings: number;
    public mortgaged: boolean;

    constructor(name: string = 'not set',
        id: string = 'not set',
        position: number = 0,
        price: number = 0,
        rent: number = 0,
        multipliedrent: any[] = [],
        // rent0: number = 0,
        // rent1: number = 0,
        // rent2: number = 0,
        // rent3: number = 0,
        // rent4: number = 0,
        housecost: number = 0,
        group: string = 'not set',
        ownedby: number = 0,
        buildings: number = 0,
        mortgaged: boolean = false
    ) {
        this.name = name;
        this.id = id;
        this.position = position;
        this.price = price;
        this.rent = rent;
        this.multipliedrent = multipliedrent;
        // this.rent0 = 0,
        //  this.rent1 = 0,
        // this.rent2 = 0,
        // this.rent3 = 0,
        // this.rent4 = 0,
        this.housecost = housecost;
        this.group = group;
        this.ownedby = ownedby;
        this.buildings = buildings;
        this.mortgaged = mortgaged;
    }

    public deserialize(obj: object) {
        // const obj = JSON.parse(sJSON);
        console.log('obj', obj);
        Object.assign(this, obj);

        console.log('this', this)
    }

}

export class CommunityChess {
    public name: string;
    public id: string;
    public group: string;
    public averageProbability: number;

    constructor(name: string = 'not set',
                id: string = 'not set',
                group: string = 'not set',
                averageProbability: number = 0){
            this.name = name;
            this.id = id;
            this.group = group;
            this.averageProbability = averageProbability;
    }

    public deserialize(obj: object){
        Object.assign(this, obj);
    }
}

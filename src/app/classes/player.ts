export class Player {
    public ID: number = -1;
    public token: string = 'not set';
    public location: number = 0;
    public balance: number = 1500;
    public titlesOwned: number[] = [];
    public inJail: boolean = false;

    constructor(){
    }

    move(numberOfSpaces: number){
        this.location += numberOfSpaces;
        if (this.location > 40){
            this.moveTo(this.location - 41);
        }
        else{
            this.moveTo(this.location);
        }
    }

    moveTo(space: number){
        if (this.inJail){
            console.log("Can't Move Spaces while in Jail!")
            return;
        }
        else if (space > 40){
            console.log("Invalid Space")
            return;
        }
        else{
            if (space == 10) { // jail
                this.goToJail();
            }
            if(space == 0 || this.location > space ){
                this.getSalary();
            }
            this.location = space;
        }
    }

    goToJail(){
        this.inJail = true;
        this.location = 10;
    }

    getSalary(){
        this.balance += 200;
    }
}
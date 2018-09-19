export class Dice {
 public d1: number;
 public d2: number;
 public total: number;

 constructor(){
    this.d1 = 0;
    this.d2 = 0;
    this.total = 0;
 }

 public roll() {
    this.d1 = Math.floor(Math.random() * 6) + 1;
    this.d2 = Math.floor(Math.random() * 6) + 1;
    console.log('d1.roll() ', this.d1);
    console.log('d2.roll() ', this.d2);
    this.total = this.d1 + this.d2;
    let doublesRolledTF;
    if(this.d1 == this.d2){
        this.roll();
        return doublesRolledTF = true;

    }else{
        return doublesRolledTF = false;
     }  
 }
}

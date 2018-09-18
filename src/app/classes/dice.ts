export class Dice {
 public d1: number;
 public d2: number;
//  public isSame: boolean;
 constructor(){
    this.d1 = 0;
    this.d2 = 0;
    // this.isSame = false;
 }
 public roll() {
    // console.log('d.isSame', this.isSame);
    this.d1 = Math.floor(Math.random() * 6) + 1;
    console.log('d1.roll() ', this.d1);
    this.d2 = Math.floor(Math.random() * 6) + 1;
    console.log('d2.roll() ', this.d2);
    if(this.d1 == this.d2){
        // this.isSame = true;
        this.roll();
    }
    // else{
    //     this.isSame = false;
    // }
    
 }
}

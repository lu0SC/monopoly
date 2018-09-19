import { TestBed, async } from '@angular/core/testing';
import { Dice } from '../app/classes/dice';
import { Player } from '../app/classes/player';
describe('classes.player', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
            ],
            providers: [],
            imports: []
        }).compileComponents();
    }));

    fit('player should be able to move properly in bounds of board', async(() => {
        // ARRANGE
        const p = new Player();        
        const d = new Dice();
        p.location = Math.floor(Math.random() * 39) + 1; // random starting location
        d.roll();
        let moveSpaces = d.total;
        console.log("current location",p.location);

        // ACT
        p.move(moveSpaces);

        // ASSERT
        expect(p.location).toBeLessThanOrEqual(40);
        // console.log('move', moveSpaces, ' spaces');
        // console.log('new location', p.location);
    }));

    it('player should be able to moveTo a space DIRECTLY', async(() => {
        // ARRANGE
        const p = new Player();
        p.location = Math.floor(Math.random() * 39) + 1; // random starting location
        const newLocation = Math.floor(Math.random() * 39) + 1; // random new location
        console.log("current location",p.location);

        // ACT
        p.moveTo(newLocation);

        // ASSERT
        expect(p.location).toEqual(newLocation);
        expect(p.location).toBeLessThanOrEqual(40);
        //console.log('move to', newLocation);
        //console.log('new location', p.location);
    }));

    it('player should NOT move if in jail', async(() => {
        // ARRANGE
        const p = new Player();
        const d = new Dice();
        p.goToJail();
        d.roll();
        let moveSpaces = d.total;
        let prevLocation = p.location;

        // ACT
        p.moveTo(moveSpaces);

        // ASSERT
        expect(p.location).toEqual(prevLocation);
        // console.log('prev location', prevLocation);
        // console.log('location', p.location);
    }));

    it('player should receive $200 upon landing or passing over GO', async(() => {
        // ARRANGE
        const p = new Player();
        const p2 = new Player();      
        p.location = 1;  
        p2.location = 1; 
        const prevBal1 = p.balance;
        const prevBal2 = p2.balance;
        let space = 0; // position of GO space

        // ACT
        p.moveTo(space + 8); // goes around board and passes over GO
        p2.moveTo(space) // goes directly to GO

        // ASSERT
        expect(p.balance).toEqual(prevBal1 + 200);
        expect(p2.balance).toEqual(prevBal2 + 200);
        // console.log("p balance", p.balance);
        // console.log("p2 balance", p2.balance);
    }));

});

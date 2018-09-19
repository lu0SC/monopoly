import { TestBed, async } from '@angular/core/testing';
import { Dice } from '../app/classes/dice';
describe('classes.spaces', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
            ],
            providers: [],
            imports: []
        }).compileComponents();
    }));
    it('should generate random number between 1 and 6 for both di', async(() => {
        // arrange
        const d = new Dice();
        // act
        d.roll();
        // assert
        expect(d.d1).toBeGreaterThanOrEqual(1);
        expect(d.d2).toBeGreaterThanOrEqual(1);
        expect(d.d1).toBeLessThanOrEqual(6);
        expect(d.d2).toBeLessThanOrEqual(6);
    }));
    fit('If both di rolls are the same, user gets another roll', async(() => {
        // ARRANGE
        const d = new Dice();
        let spy = spyOn(d, "roll").and.callThrough();

        // ACT
        const doublesRolledTF = d.roll();

        // ASSERT
        //console.log("COUNT", spy.calls.count());
        if(doublesRolledTF){
            expect(spy.calls.count()).toBeGreaterThanOrEqual(2);
        }
        else{
            expect(spy).toHaveBeenCalledTimes(1);
        }
    }));

});

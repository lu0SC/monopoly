import { TestBed, async } from '@angular/core/testing';
import { Space } from '../app/classes/space';
describe('classes.spaces', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
            ],
            providers: [],
            imports: []
        }).compileComponents();
    }));
    it('should be able to deserialize', async(() => {
        // arrange
        const s = new Space();
        const sJSON = '{"name": "Park Place","id": "parkplace","position": 38,"price": 350,"rent": 35,"multipliedrent": [175,500,1100,1300,1500], "housecost": 200, "group": "darkblue","ownedby": -1,"buildings": 0,"mortgaged": false}';
        // act
        const sObj = JSON.parse(sJSON);
        console.log('parse obj', sObj);
        s.deserialize(sObj);
        // assert
        expect(s.name).toEqual('Park Place');
        expect(s.id).toEqual('parkplace');
        expect(s.position).toEqual(38);
        expect(s.price).toEqual(350);
        expect(s.rent).toEqual(35);
        expect(s.multipliedrent).toEqual([175,500,1100,1300,1500]);
        expect(s.housecost).toEqual(200);
        expect(s.group).toEqual('darkblue');
        expect(s.ownedby).toEqual(-1);
        expect(s.buildings).toEqual(0);
        expect(s.mortgaged).toEqual(false);
        console.log('s deserialized', s);
    }));

});

import { TestBed, async } from '@angular/core/testing';
import { CommunityChess } from '../app/classes/communityChest';
describe('classes.communityChess', () => {
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
        const c = new CommunityChess();
        const cJSON = '{"name": "Community Chest","id": "communitychest","group": "Special","averageProbability": 1.82995}';
        // act
        const cObj = JSON.parse(cJSON);
        console.log('parse obj', cObj);
        c.deserialize(cObj);
        // assert
        expect(c.name).toEqual('Community Chest');
        expect(c.id).toEqual('communitychest');
        expect(c.group).toEqual('Special');
        expect(c.averageProbability).toEqual(1.82995);
        console.log('c deserialized', c);
    }));

});

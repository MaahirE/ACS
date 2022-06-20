import { BooleanizePipe } from './booleanize.pipe';

describe('BooleanizePipe', () => {
    it('create an instance', () => {
        const pipe = new BooleanizePipe();
        expect(pipe).toBeTruthy();
    });
});
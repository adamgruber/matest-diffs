const expect = require('chai').expect;
const obj = {
    data: [
        {
            fname: 'Tony',
            lname: 'Stark',
            identity: 'Iron Man',
        },
    ],
};

describe('Diffs', () => {
    it('should display inline diff', () => {
        expect(obj).to.equal({
            data: [
                {
                    fname: 'Peter',
                    lname: 'Parker',
                    identity: 'Spider-Man',
                },
            ],
        });
    });
});

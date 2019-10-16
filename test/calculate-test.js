const describe = require('mocha').describe;
const assert = require('assert');

describe('Simple calc test:', () => {
    it('1+1 must to be 2', () => {
        assert(1 + 1 === 2);
    });
});

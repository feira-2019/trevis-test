const describe = require('mocha').describe;
const assert = require('assert');
const calculate = require('../src/calculate');

describe('Simple calc test:', () => {
    const zero2Nine = new Array(10).map((e, i) => i);

    for (let i = 0; i < zero2Nine.length; i++) {
        for (let j = 0; j < zero2Nine.length; j++) {
            const sumResult = i + j;
            it(`${i} + ${j} = ${sumResult}`, () => {
                assert.equal(calculate.plus(i, j), sumResult);
            });
        }
    }
});
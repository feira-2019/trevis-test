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

describe('Baskara calc test:', () => {
    it(`a = 1, b = –4, c = –5 == [-1, 5]`, () => {
        const baskaraRoots = calculate.baskara(1, -4, -5);
        assert.equal(baskaraRoots[0], -1);
        assert.equal(baskaraRoots[1], 5);
    });
});
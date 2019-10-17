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
    const baskaraTestData = [{
            a: 1,
            b: -4,
            c: -5,
            r: [-1, 5]
        },
        {
            a: 1,
            b: 0,
            c: -16,
            r: [-4, 4]
        }
    ];
    for (let i = 0; i < baskaraTestData.length; i++) {
        it(`a = ${baskaraTestData[i].a}, b = ${baskaraTestData[i].b}, c = ${baskaraTestData[i].c} == [${baskaraTestData[i].r[0]}, ${baskaraTestData[i].r[1]}]`, () => {
            const baskaraRoots = calculate.baskara(baskaraTestData[i].a, baskaraTestData[i].b, baskaraTestData[i].c);
            assert.equal(baskaraRoots[0], baskaraTestData[i].r[0]);
            assert.equal(baskaraRoots[1], baskaraTestData[i].r[1]);
        });
    }
});
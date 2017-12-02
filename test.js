const 
    day1a = new (require('./1a'))(),
    day1b = new (require('./1b'))(),
    day2a = new (require('./2a'))(),
    day2b = new (require('./2b'))();

const assert = require('assert');

describe('1a', function () {
    stringReturnsNumber('1122', 3, day1a.captcha);
    stringReturnsNumber('1111', 4, day1a.captcha);
    stringReturnsNumber('1234', 0, day1a.captcha);
    stringReturnsNumber('91212129', 9, day1a.captcha);
});

describe('1b', function () {
    stringReturnsNumber('1212', 6, day1b.captcha);
    stringReturnsNumber('1221', 0, day1b.captcha);
    stringReturnsNumber('123425', 4, day1b.captcha);
    stringReturnsNumber('123123', 12, day1b.captcha);
    stringReturnsNumber('12131415', 4, day1b.captcha);
});

describe('2a', function () {
    stringReturnsNumber('5	1	9	5', 8, day2a.checksum);
    stringReturnsNumber('7	5	3', 4, day2a.checksum);
    stringReturnsNumber('2	4	6	8', 6, day2a.checksum);
    stringReturnsNumber(
    `5	1	9	5
    7	5	3
    2	4	6	8`, 18, day2a.checksum);
});

describe('2b', function () {
    stringReturnsNumber('5	9	2	8', 4, day2b.checksum);
    stringReturnsNumber('9	4	7	3', 3, day2b.checksum);
    stringReturnsNumber('3	8	6	5', 2, day2b.checksum);
    stringReturnsNumber(
    `5	9	2	8
    9	4	7	3
    3	8	6	5`, 9, day2b.checksum);
});

function stringReturnsNumber(input, expected, eval) {
    return it(`should return ${expected} when value is '${input}'`, () => assert.equal(eval(input), expected));
}
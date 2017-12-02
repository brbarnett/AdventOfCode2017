const solution = new (require('./1b'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('1b', () => {
    testHelpers.stringReturnsNumber('1212', 6, solution.captcha);
    testHelpers.stringReturnsNumber('1221', 0, solution.captcha);
    testHelpers.stringReturnsNumber('123425', 4, solution.captcha);
    testHelpers.stringReturnsNumber('123123', 12, solution.captcha);
    testHelpers.stringReturnsNumber('12131415', 4, solution.captcha);
});
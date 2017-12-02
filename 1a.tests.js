const solution = new (require('./1a'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('1a', () => {
    testHelpers.stringReturnsNumber('1122', 3, solution.captcha);
    testHelpers.stringReturnsNumber('1111', 4, solution.captcha);
    testHelpers.stringReturnsNumber('1234', 0, solution.captcha);
    testHelpers.stringReturnsNumber('91212129', 9, solution.captcha);
});
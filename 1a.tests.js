const solution = new (require('./1a'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('1a', () => {
    testHelpers.registerUnitTest('1122', 3, solution.captcha);
    testHelpers.registerUnitTest('1111', 4, solution.captcha);
    testHelpers.registerUnitTest('1234', 0, solution.captcha);
    testHelpers.registerUnitTest('91212129', 9, solution.captcha);
});
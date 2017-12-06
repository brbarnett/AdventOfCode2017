const solution = new (require('./1b'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('1b', () => {
    testHelpers.registerUnitTest('1212', 6, solution.captcha);
    testHelpers.registerUnitTest('1221', 0, solution.captcha);
    testHelpers.registerUnitTest('123425', 4, solution.captcha);
    testHelpers.registerUnitTest('123123', 12, solution.captcha);
    testHelpers.registerUnitTest('12131415', 4, solution.captcha);
});
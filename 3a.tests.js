const solution = new (require('./3a'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('3a', () => {
    testHelpers.registerUnitTest(1, 0, solution.solve);
    testHelpers.registerUnitTest(12, 3, solution.solve);
    testHelpers.registerUnitTest(23, 2, solution.solve);
    testHelpers.registerUnitTest(1024, 31, solution.solve);
});
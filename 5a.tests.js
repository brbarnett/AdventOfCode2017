const solution = new (require('./5a'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('5a', () => {
    testHelpers.registerUnitTest(`0
    3
    0
    1
    -3`, 5, solution.solve.bind(solution));
});
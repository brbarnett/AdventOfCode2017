const solution = new (require('./5b'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('5a', () => {
    testHelpers.registerUnitTest(`0
    3
    0
    1
    -3`, 10, solution.solve.bind(solution));
});
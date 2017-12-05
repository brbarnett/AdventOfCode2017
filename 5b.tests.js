const solution = new (require('./5a'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('5a', () => {
    testHelpers.stringReturnsNumber(`0
    3
    0
    1
    -3`, 10, solution.solve.bind(solution));
});
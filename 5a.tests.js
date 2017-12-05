const solution = new (require('./4b'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('5a', () => {
    testHelpers.stringReturnsNumber(`0
    3
    0
    1
    -3`, 5, solution.solve.bind(solution));
});
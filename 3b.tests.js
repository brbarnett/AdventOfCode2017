const solution = new (require('./3b'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('3b', () => {
    testHelpers.stringReturnsNumber(23, 25, solution.solve.bind(solution));
    testHelpers.stringReturnsNumber(57, 59, solution.solve.bind(solution));
    testHelpers.stringReturnsNumber(304, 330, solution.solve.bind(solution));
    testHelpers.stringReturnsNumber(747, 806, solution.solve.bind(solution));
    testHelpers.stringReturnsNumber(800, 806, solution.solve.bind(solution));
});
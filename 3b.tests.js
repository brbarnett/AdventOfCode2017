const solution = new (require('./3b'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('3b', () => {
    testHelpers.registerUnitTest(23, 25, solution.solve.bind(solution));
    testHelpers.registerUnitTest(57, 59, solution.solve.bind(solution));
    testHelpers.registerUnitTest(304, 330, solution.solve.bind(solution));
    testHelpers.registerUnitTest(747, 806, solution.solve.bind(solution));
    testHelpers.registerUnitTest(800, 806, solution.solve.bind(solution));
});
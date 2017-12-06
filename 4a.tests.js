const solution = new (require('./4a'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('4a', () => {
    testHelpers.registerUnitTest('aa bb cc dd ee', 1, solution.solve.bind(solution));
    testHelpers.registerUnitTest('aa bb cc dd aa', 0, solution.solve.bind(solution));
    testHelpers.registerUnitTest('aa bb cc dd aaa', 1, solution.solve.bind(solution));
});
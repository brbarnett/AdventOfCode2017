const solution = new (require('./4a'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('4a', () => {
    testHelpers.stringReturnsNumber('aa bb cc dd ee', true, solution.solve.bind(solution));
    testHelpers.stringReturnsNumber('aa bb cc dd aa', false, solution.solve.bind(solution));
    testHelpers.stringReturnsNumber('aa bb cc dd aaa', true, solution.solve.bind(solution));
});
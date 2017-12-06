const solution = new (require('./4b'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('4b', () => {
    testHelpers.registerUnitTest('abcde fghij', 1, solution.solve.bind(solution));
    testHelpers.registerUnitTest('abcde xyz ecdab', 0, solution.solve.bind(solution));
    testHelpers.registerUnitTest('a ab abc abd abf abj', 1, solution.solve.bind(solution));
    testHelpers.registerUnitTest('iiii oiii ooii oooi oooo', 1, solution.solve.bind(solution));
    testHelpers.registerUnitTest('oiii ioii iioi iiio', 0, solution.solve.bind(solution));
});
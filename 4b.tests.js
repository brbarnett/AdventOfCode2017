const solution = new (require('./4b'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('4b', () => {
    testHelpers.stringReturnsNumber('abcde fghij', 1, solution.solve.bind(solution));
    testHelpers.stringReturnsNumber('abcde xyz ecdab', 0, solution.solve.bind(solution));
    testHelpers.stringReturnsNumber('a ab abc abd abf abj', 1, solution.solve.bind(solution));
    testHelpers.stringReturnsNumber('iiii oiii ooii oooi oooo', 1, solution.solve.bind(solution));
    testHelpers.stringReturnsNumber('oiii ioii iioi iiio', 0, solution.solve.bind(solution));
});
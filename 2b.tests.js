const solution = new (require('./2b'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('2b', () => {
    testHelpers.stringReturnsNumber('5	9	2	8', 4, solution.checksum);
    testHelpers.stringReturnsNumber('9	4	7	3', 3, solution.checksum);
    testHelpers.stringReturnsNumber('3	8	6	5', 2, solution.checksum);
    testHelpers.stringReturnsNumber(
        `5	9	2	8
    9	4	7	3
    3	8	6	5`, 9, solution.checksum);
});
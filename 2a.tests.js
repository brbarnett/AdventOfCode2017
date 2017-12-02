const solution = new (require('./2a'))(),
    testHelpers = new (require('./test.helpers'))();

const assert = require('assert');

describe('2a', () => {
    testHelpers.stringReturnsNumber('5	1	9	5', 8, solution.checksum);
    testHelpers.stringReturnsNumber('7	5	3', 4, solution.checksum);
    testHelpers.stringReturnsNumber('2	4	6	8', 6, solution.checksum);
    testHelpers.stringReturnsNumber(
        `5	1	9	5
    7	5	3
    2	4	6	8`, 18, solution.checksum);
});
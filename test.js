const assert = require('assert');

class Helpers {
    stringReturnsNumber(input, expected, evaluator) {
        return it(`should return ${expected} when value is '${input}'`, () => assert.equal(evaluator(input), expected));
    }
}

const helpers = new Helpers();

// Day 1
new (require('./1a'))().tests(helpers);
new (require('./1b'))().tests(helpers);

// Day 2
new (require('./2a'))().tests(helpers);
new (require('./2b'))().tests(helpers);
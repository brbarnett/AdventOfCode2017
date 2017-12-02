const fs = require('fs'),
    _ = require('lodash'),
    assert = require('assert');

class Solution {
    run() {
        const input = fs.readFileSync('./2.dat', 'utf8')

        const result = this.checksum(input);
        console.log('Result:', result);
    }

    tests(helpers) {
        const instance = this;
        describe('2a', function () {
            helpers.stringReturnsNumber('5	1	9	5', 8, instance.checksum);
            helpers.stringReturnsNumber('7	5	3', 4, instance.checksum);
            helpers.stringReturnsNumber('2	4	6	8', 6, instance.checksum);
            helpers.stringReturnsNumber(
                `5	1	9	5
            7	5	3
            2	4	6	8`, 18, instance.checksum);
        });
    }

    checksum(input) {
        return _(input)
            .chain()
            .split('\n')    // split into rows
            .reduce((result, row) => {
                const data = _(row)
                    .chain()
                    .split('\t')    // split tab-delimited content
                    .map(x => +x)   // convert all to number
                    .value();

                result += _.max(data) - _.min(data);
                return result;
            }, 0)
            .value()
    }
}

module.exports = Solution;
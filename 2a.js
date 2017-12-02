const fs = require('fs'),
    _ = require('lodash');

class Solution {
    run(test) {
        const input = fs.readFileSync('./2.dat', 'utf8')

        const result = this.checksum(input);
        console.log('Result:', result);
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
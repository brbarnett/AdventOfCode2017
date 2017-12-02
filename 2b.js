const fs = require('fs'),
    _ = require('lodash');

class Solution {
    run(test) {
        const input = fs.readFileSync('./2.dat', 'utf8');

        const result = this.checksum(input);
        console.log('Result:', result); // returns 294 for final answer
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

                result += _(this.cartesianProductOf(data, data))
                    .chain()
                    .filter(x => x[0] !== x[1]) // shortcut to avoid self/self
                    .filter(x => x[0] % x[1] === 0) // check where (a) evenly divisible by (b)
                    .map(x => x[0] / x[1])  // divide (a) by (b)
                    .first()
                    .value();
                return result;
            }, 0)
            .value()
    }

    // reference: https://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript
    cartesianProductOf() {
        return _.reduce(arguments, function (a, b) {
            return _.flatten(_.map(a, function (x) {
                return _.map(b, function (y) {
                    return x.concat([y]);
                });
            }), true);
        }, [[]]);
    };
}

module.exports = Solution;
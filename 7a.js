const _ = require('lodash');

class Solution {
    run() {
        const input = fs.readFileSync('./7.dat', 'utf8');

        const result = this.solve(input);
        console.log('Result:', result);
    }

    solve(input) {
        return input;
    }
}

module.exports = Solution;
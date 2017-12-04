const fs = require('fs'),
    _ = require('lodash');

class Solution {
    run() {
        const input = fs.readFileSync('./4.dat', 'utf8');

        const result = this.solve(input);
        console.log('Result:', result); // correct answer is 451
    }

    solve(input) {
        return _(input)
            .chain()
            .split('\r\n')    // split input by lines
            .reduce((total, next) => {
                const arr = _(next).split(' ').value(); // convert to array of 'words'

                if (arr.length === _.uniq(arr).length) total++; // check if array word length differs from array of unique words

                return total;
            }, 0)
            .value();
    }

}

module.exports = Solution;
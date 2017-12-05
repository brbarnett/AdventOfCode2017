const fs = require('fs'),
    _ = require('lodash');

class Solution {
    run() {
        const input = fs.readFileSync('./5.dat', 'utf8');

        const result = this.solve(input);
        console.log('Result:', result); // 29629538
    }

    solve(input) {
        const arr = _(input)
            .chain()
            .split('\n')    // split by line break
            .map(x => +x)   // convert all to numbers
            .value();

        let currentIndex = 0;
        let steps = 0;
        while (currentIndex >= 0 && currentIndex < arr.length) {  // while we are in the 'maze,' iterate
            let jumps = arr[currentIndex];  // save jumps from current index
            arr[currentIndex] += jumps >= 3 ? -1 : 1; // increment array at current index
            currentIndex += jumps;  // increment current index by number of jumps

            steps++;    // increment steps
        }

        return steps;
    }
}

module.exports = Solution;
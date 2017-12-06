const _ = require('lodash');

class Solution {
    run() {
        const input = '4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5';

        const result = this.solve(input);
        console.log('Result:', result); // 12841
    }

    solve(input) {
        const arr = _(input)
            .chain()
            .split('\t')    // split input by tabs, forming array
            .map(x => +x)   // convert all to numbers
            .value();

        let history = [];
        // history.push(arr);  // add initial configuration to history

        let cycles = 0;
        let initialBlocksIndex = 0;
        let lastArr = arr;
        while (//history.length === 1  // ignore first time
            searchForArray(history, lastArr) < 0)   // determine when we have seen this state before
        {
            // add current state to history
            history.push(lastArr);

            lastArr = _.clone(lastArr);
            let blocks = _.max(lastArr);
            initialBlocksIndex = _.findIndex(lastArr, x => x === blocks);   // find max blocks, then find index where it resides
            lastArr[initialBlocksIndex] = 0;    // pull blocks from initial index

            // distribute blocks
            for (let i = 1; i <= blocks; i++) {
                lastArr[(initialBlocksIndex + i) % lastArr.length]++;
            }

            cycles++;
        }

        return cycles;
    }
}

function searchForArray(haystack, needle) {
    var i, j, current;
    for (i = 0; i < haystack.length; ++i) {
        if (needle.length === haystack[i].length) {
            current = haystack[i];
            for (j = 0; j < needle.length && needle[j] === current[j]; ++j);
            if (j === needle.length)
                return i;
        }
    }
    return -1;
}

module.exports = Solution;
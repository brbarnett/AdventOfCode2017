const fs = require('fs'),
    _ = require('lodash');

class Solution {
    run() {
        const input = 277678;

        const result = this.solve(input);
        console.log('Result:', result);
    }

    solve(input) {
        let sizeOfGrid = Math.ceil(Math.sqrt(input));   // get minimum root
        if (sizeOfGrid % 2 === 0) sizeOfGrid++;  // must be odd due to grid growth rules
        const minimumDistance = Math.floor(sizeOfGrid / 2); // number is on outer ring, so min by manhattan calc
        const positionOnOuterRing = input - Math.pow(Math.max(sizeOfGrid - 2, 1), 2);   // find which position on the outer ring
        const ringSteps = Math.max(sizeOfGrid - 1, 1);  // calc ring steps, which is indexed value per leg
        const absolutePosition = positionOnOuterRing / ringSteps;   // get absolute position on ring
        const relativePosition = absolutePosition - Math.floor(absolutePosition);   // get relative to any leg (doesn't matter which)
        const stepsOffCenter = absolutePosition > 0 ? Math.abs(0.5 - relativePosition) * ringSteps : 0; // find offset from center (non-zero)

        return Math.floor(minimumDistance + stepsOffCenter);    // floor for rounding
    }
}

module.exports = Solution;
const _ = require('lodash');

class Solution {
    run() {
        const input = 277678;

        const result = this.solve(input);
        console.log('Result:', result); // correct answer is 279138
    }

    solve(input) {
        let nextValue = 1;
        let square = 1;

        // create 1x1 grid
        let grid = [[nextValue]];
        let position = this.getPositionFromSquare(square);  // get intial position
        square++;   // increment square

        // loop through until next plotted value is greater than input
        while (nextValue <= input) {
            // get next position
            position = this.getPositionFromSquare(square);

            // check if we need to expand the grid (if out of bounds)
            if (position[0] > grid.length - 1
                || position[1] > grid.length - 1) {
                // expand grid
                this.expandGrid(grid);
            }

            // get surrounding values and sum
            nextValue = 0;
            for (let row = Math.max(position[0] - 1, 0); row <= Math.min(position[0] + 1, grid.length - 1); row++) {
                for (let col = Math.max(position[1] - 1, 0); col <= Math.min(position[1] + 1, grid.length - 1); col++) {
                    nextValue += grid[row][col];
                }
            }

            // set position to summed value
            grid[position[0]][position[1]] = nextValue;

            square++;
        }

        return nextValue;
    }

    expandGrid(grid) {
        const newSize = grid.length + 2;

        // add new columns
        for (let i = 0; i < grid.length; i++) {
            grid[i].unshift(0);
            grid[i].push(0);
        }

        // add new rows
        grid.unshift(_.fill(new Array(newSize), 0));
        grid.push(_.fill(new Array(newSize), 0));
    }

    getPositionFromSquare(square) {
        if (square === 1) return [0, 0];

        let sizeOfGrid = Math.ceil(Math.sqrt(square));   // get minimum root
        if (sizeOfGrid % 2 === 0) sizeOfGrid++;  // must be odd due to grid growth rules

        const minimumDistance = Math.floor(sizeOfGrid / 2); // number is on outer ring, so min by manhattan calc
        const positionOnOuterRing = square - Math.pow(sizeOfGrid - 2, 2);   // find which position on the outer ring
        const ringSteps = Math.max(sizeOfGrid - 1, 1);  // calc ring steps, which is indexed value per leg
        const absolutePosition = +(positionOnOuterRing / ringSteps).toFixed(5);   // get absolute position on ring
        const relativePosition = absolutePosition - Math.floor(absolutePosition);   // get relative to any leg (doesn't matter which)

        const stepsOnLeg = Math.round(relativePosition * ringSteps);

        // determine which leg the square is in
        let legIndex = Math.floor(absolutePosition);
        if (legIndex === 4)
            legIndex = 0;

        // position logic based on leg (since direction matters)
        let position = [0, 0];
        const positionFunctions = {
            0: () => [ringSteps - stepsOnLeg, ringSteps],
            1: () => [0, ringSteps - stepsOnLeg],
            2: () => [stepsOnLeg, 0],
            3: () => [ringSteps, stepsOnLeg]
        };
        position = positionFunctions[legIndex]();

        return position;
    }
}

module.exports = Solution;
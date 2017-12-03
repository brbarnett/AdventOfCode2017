const fs = require('fs'),
    _ = require('lodash');

class Solution {
    run() {
        const input = 277678;

        const result = this.solve(input);
        console.log('Result:', result); // 302948 is too high
    }

    solve(input) {
        let nextValue = 1;
        let square = 1;

        // create 1x1 grid
        let grid = [[nextValue]];
        let position = getPositionFromSquare(square);
        square++;

        // loop through until next plotted value is greater than input
        while (nextValue <= input) {
            // get next position
            position = getPositionFromSquare(square);

            console.log(grid, position, square);
            if (position[0] > grid.length - 1
                || position[1] > grid.length - 1) {
                // expand grid
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

            // get surrounding
            nextValue = 0;
            for (let row = Math.max(position[0] - 1, 0); row <= Math.min(position[0] + 1, grid.length - 1); row++) {
                for (let col = Math.max(position[1] - 1, 0); col <= Math.min(position[1] + 1, grid.length - 1); col++) {
                    nextValue += grid[row][col];
                }
            }

            grid[position[0]][position[1]] = nextValue;

            console.log(grid);

            square++;
        }

        return nextValue;

        function getPositionFromSquare(square) {
            if (square === 1) return [0, 0];

            let sizeOfGrid = Math.ceil(Math.sqrt(square));   // get minimum root
            if (sizeOfGrid % 2 === 0) sizeOfGrid++;  // must be odd due to grid growth rules

            const minimumDistance = Math.floor(sizeOfGrid / 2); // number is on outer ring, so min by manhattan calc
            const positionOnOuterRing = square - Math.pow(sizeOfGrid - 2, 2);   // find which position on the outer ring
            const ringSteps = Math.max(sizeOfGrid - 1, 1);  // calc ring steps, which is indexed value per leg
            const absolutePosition = +(positionOnOuterRing / ringSteps).toFixed(5);   // get absolute position on ring
            const relativePosition = absolutePosition - Math.floor(absolutePosition);   // get relative to any leg (doesn't matter which)

            const stepsOnLeg = Math.round(relativePosition * ringSteps);

            let legIndex = Math.floor(absolutePosition);
            if (legIndex === 4)
                legIndex = 0;

            let position = [0, 0];
            switch (legIndex) {
                case 0:
                    position = [ringSteps - stepsOnLeg, ringSteps];
                    break;
                case 1:
                    position = [0, ringSteps - stepsOnLeg];
                    break;
                case 2:
                    position = [stepsOnLeg, 0];
                    break;
                case 3:
                    position = [ringSteps, stepsOnLeg];
                    break;
            }

            return position;
        }
    }
}

module.exports = Solution;
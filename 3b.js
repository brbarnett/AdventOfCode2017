const fs = require('fs'),
    _ = require('lodash');

class Solution {
    run() {
        const input = 1;

        const result = this.solve(input);
        console.log('Result:', result);
    }

    solve(input) {
        let nextValue = 1;
        let square = 1;

        
        
        // console.log(this.getPositionFromSquare(1));
        // console.log(this.getPositionFromSquare(2));
        // console.log(this.getPositionFromSquare(3));
        // console.log(this.getPositionFromSquare(4));

        // create 1x1 grid
        let grid = [[nextValue]];
        let position = this.getPositionFromSquare(square);

        square++;
        position = this.getPositionFromSquare(square);

        console.log(grid);
        if(position[0] > grid.length - 1 || position[1] > grid.length - 1){
            // expand grid
            const newSize = grid.length + 2;

            // add new columns
            for(let i = 0; i < grid.length; i++){
                grid[i].unshift(0);
                grid[i].push(0);
            }

            // add new rows
            grid.unshift(_.fill(new Array(newSize), 0));
            grid.push(_.fill(new Array(newSize), 0));
        }
        
        // get surrounding
        

        grid[position[1]][position[0]] = 4;

        console.log(grid);

        // while(input < nextValue)
        // {
            
        // }
        // console.log(grid.length);
        // // position = [0, 1];

        // console.log(grid, position);

    }

    getPositionFromSquare(square) {
        if (square === 1) return [0, 0];

        let sizeOfGrid = Math.ceil(Math.sqrt(square));   // get minimum root
        if (sizeOfGrid % 2 === 0) sizeOfGrid++;  // must be odd due to grid growth rules

        const minimumDistance = Math.floor(sizeOfGrid / 2); // number is on outer ring, so min by manhattan calc
        const positionOnOuterRing = square - Math.pow(sizeOfGrid - 2, 2);   // find which position on the outer ring
        const ringSteps = Math.max(sizeOfGrid - 1, 1);  // calc ring steps, which is indexed value per leg
        const absolutePosition = positionOnOuterRing / ringSteps;   // get absolute position on ring
        const relativePosition = absolutePosition - Math.floor(absolutePosition);   // get relative to any leg (doesn't matter which)

        const stepsOnLeg = relativePosition * ringSteps;

        let legIndex = Math.floor(absolutePosition);
        if (legIndex === ringSteps) legIndex = 0;

        console.log(minimumDistance, legIndex, stepsOnLeg, ringSteps);
        let position = [0, 0];
        switch (legIndex) {
            case 0:
                position = [ringSteps, ringSteps - stepsOnLeg];
                break;
            case 1:
                position = [1 - stepsOnLeg, 0];
                break;
            case 2:
                position = [0, stepsOnLeg];
                break;
            case 3:
                position = [stepsOnLeg, ringSteps];
                break;
        }

        return position;
    }
}

module.exports = Solution;
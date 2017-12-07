const fs = require('fs'),
    _ = require('lodash');

const pattern = new RegExp(/(.+)\s\((.+)\)(?:\s->\s)?(.+)?/);

class Solution {
    run() {
        const input = fs.readFileSync('./7.dat', 'utf8');

        const result = this.solve(input);
        console.log('Result:', result); // azqje
    }

    solve(input) {
        const parsed = _(input)
            .chain()
            .split('\r\n')
            .map(this.parse)
            .value();

            const stacked = _(parsed)
                .chain()
                .filter(x => typeof x.programs !== 'undefined')
                .flatMap(x => x.programs)
                .uniq()
                .value();

            return _(parsed)
                .chain()
                .map(x => x.name)
                .difference(stacked)
                .first()
                .value();
    }

    parse(row) {
        const data = pattern.exec(row);

        return {
            name: data[1],
            weight: +data[2],
            programs: data[3] ? data[3].split(',').map(x => x.trim()) : []
        };
    }
}

module.exports = Solution;
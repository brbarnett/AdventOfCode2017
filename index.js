const _ = require('lodash');

const process = require('./1b');

process.run(test);

function test(input, expected, eval) {
    let output = eval(input);

    console.log('Input:', input, '; Calculated:', output, '; Expected:', expected, '; Pass:', output === expected)
}
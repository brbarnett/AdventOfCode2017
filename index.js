const process = require('./2b');

new process().run(test);

function test(input, expected, eval) {
    let output = eval(input);

    console.log('Input:', input, '; Calculated:', output, '; Expected:', expected, '; Pass:', output === expected)
}
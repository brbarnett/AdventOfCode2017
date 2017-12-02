const _ = require('lodash');
const process = require('./2b');

function test(input, expected, eval) {
    let output = eval(input);

    console.log('Input:', input, '; Calculated:', output, '; Expected:', expected, '; Pass:', output === expected)
}

// custom lodash functions
(function() {
    _.mixin({
        'debug': function (val) {
            console.log(val);
            return val;
        }
    });
}());

new process().run(test);
const _ = require('lodash');
const solution = require('./2b');

// custom lodash functions
(function() {
    _.mixin({
        'debug': function (val) {
            console.log(val);
            return val;
        }
    });
}());

new solution().run();
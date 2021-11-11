const debounce = require('lodash.debounce');
const seconds = require('./lib/seconds');

console.time('PLAIN');
seconds(3).then(() => console.timeEnd('PLAIN'));

console.time('DEBOUNCE');
const debounced = debounce(seconds, 100);
debounced(3).then(() => console.timeEnd('DEBOUNCE'));

console.log('Initialised');

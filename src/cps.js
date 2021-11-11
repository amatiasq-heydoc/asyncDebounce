const debounce = require('lodash.debounce');
const secondsCps = (amount, callback) =>
  setTimeout(() => callback('result'), amount * 1000);

console.time('PLAIN');
secondsCps(3, () => console.timeEnd('PLAIN'));

console.time('DEBOUNCE');
const debounced = debounce(secondsCps, 100);
debounced(3, () => console.timeEnd('DEBOUNCE'));

console.log('Initialised');

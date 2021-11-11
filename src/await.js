const { debounce } = require('lodash');
const seconds = require('./lib/seconds');

(async () => {
  console.time('PLAIN');
  await seconds(3);
  console.timeEnd('PLAIN');
})();

(async () => {
  console.time('DEBOUNCE');
  const debounced = debounce(seconds, 100);
  await debounced(3);
  console.timeEnd('DEBOUNCE');
})();

console.log('Initialised');

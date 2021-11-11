module.exports = function asyncDbounce(fn, wait) {
  let timer;

  return (...args) => {
    return new Promise((resolve, reject) => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        fn(...args).then(resolve, reject);
      }, wait);
    });
  };
};

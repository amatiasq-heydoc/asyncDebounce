module.exports = (amount) =>
  new Promise((resolve) => setTimeout(resolve, amount * 1000));

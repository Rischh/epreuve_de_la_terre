const { argv } = require("node:process");

const power = (arg) => {
  const num = arg[0];
  const exposant = arg[1];

  return num ** exposant;
};

const arg = argv.splice(2);

const result = power(arg);

console.log(result);

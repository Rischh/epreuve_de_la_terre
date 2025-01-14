const { argv } = require("node:process");

const findSwiss = (arg) => {
  let max = 0;

  for (value of arg) if (max < value) max = value;

  let middle = 0;

  for (value of arg) {
    if (value == max) continue
    if (middle < value) middle = value
  }

  return middle;
};

const arg = argv.splice(2);

const result = findSwiss(arg);

console.log(result);

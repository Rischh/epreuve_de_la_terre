const { argv } = require("node:process");

const squareRoot = (arg) => {
  for (let i = 0; i < arg; i++)
    if (i ** 2 === arg) {
      return i;
    }
};

const arg = Number(argv.splice(2)[0]);

const result = squareRoot(arg);
console.log(result);

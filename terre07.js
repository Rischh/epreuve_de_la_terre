const { argv } = require("node:process");

const sizeOfString = (arg) => {
  const list = arg.split("");
  let size = null;

  for (let index in list) {
    size = index;
  }

  return Number(size) + 1;
};

const arg = argv.slice(2)[0];

const result = sizeOfString(arg);
console.log(result);

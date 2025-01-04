const { argv } = require("node:process");

const reverseString = (arg) => {
  const list = arg.split("");
  let copyList = [...list];

  let newString = "";

  for (let i = 0; i < list.length; i++) {
    const lastIndex = copyList[copyList.length - 1];
    newString += lastIndex;
    copyList.pop();
  }

  return newString;
};

const arg = argv.slice(2)[0];

const result = reverseString(arg);
console.log(result);

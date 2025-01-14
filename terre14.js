const { argv } = require("node:process");

// Acception only one list
const sort = (arr) => {
  const copyArr = [...arr];
  const sortedArr = [];

  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (value of copyArr) if (max < value) max = value;
    sortedArr.unshift(max);
    copyArr.splice(copyArr.indexOf(max), 1);
  }

  return sortedArr;
};

// Accept only two list
const isSorted = (arr, sortedArr) => {
  if (arr.toString() == sortedArr.toString()) return "Triée !";
  return "Pas triée !";
};

const arg = argv.splice(2);
const arr = arg.map((n) => Number(n));

const result = isSorted(arr, sort(arr));

console.log(result);

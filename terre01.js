const absolutePath = __filename;

const pathToArray = absolutePath.split("/");

const lastIndex = pathToArray.length - 1;

const fileName = pathToArray[lastIndex];

console.log(fileName);

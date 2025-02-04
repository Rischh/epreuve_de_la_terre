const arguments = process.argv.slice(2);

if (arguments.length !== 1) {
  console.error("Le programme à besoin d'un argument pour fonctionner.");
  process.exit();
}

const argument = arguments[0];

const stringInList = argument.split("");
let copyList = [...stringInList];

let reverseString = "";

for (let i = 0; i < stringInList.length; i++) {
  const lastElement = copyList[copyList.length - 1];
  reverseString += lastElement;
  copyList.pop();
}

console.log(reverseString);

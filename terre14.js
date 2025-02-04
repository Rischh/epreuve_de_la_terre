const arguments = process.argv.splice(2);

if (arguments.length < 2) {
  console.error("Le programme a besoin d'au moins 2 arguments.");
  process.exit();
}

const testIsAValidNumericalOperation = arguments.map(ele => +ele);
const isArrayOfNumber =
  testIsAValidNumericalOperation.filter(ele => Number.isNaN(ele)).length > 0;

const bashSpecialCharacter = [""]; // not all
for (const arg of arguments)
  if (isArrayOfNumber || bashSpecialCharacter.includes(arg)) {
    console.error("L'argument doit être un entier.");
    process.exit();
  }

const array = arguments.map(n => Number(n));
const copyArray = [...array];

const sortedArr = [];

for (let i = 0; i < array.length; i++) {
  let max = 0;
  for (value of copyArray) if (max < value) max = value;
  sortedArr.unshift(max);
  copyArray.splice(copyArray.indexOf(max), 1);
}

if (array.toString() == sortedArr.toString()) console.log("Triée !");
else console.log("Pas triée !");

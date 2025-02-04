const arguments = process.argv.slice(2);
const argument = arguments[0];

if (arguments.length !== 1) {
  console.error("Le programme à besoin de 1 argument pour fonctionner.");
  process.exit();
}

const bashSpecialCharacter = [""]; // not all
const testIsAValidNumericalOperation = +argument;

if (
  Number.isNaN(testIsAValidNumericalOperation) ||
  bashSpecialCharacter.includes(argument)
) {
  console.error("L'argument doit être un entier.");
  process.exit();
}

const isEven = argument % 2 === 0 ? "Pair" : "Impair";

console.log(isEven);

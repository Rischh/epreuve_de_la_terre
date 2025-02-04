const arguments = process.argv.splice(2);
const argument = arguments[0];

if (arguments.length !== 1) {
  console.error("Le programme à besoin de 1 argument pour fonctionner.");
  process.exit();
}

const bashSpecialCharacter = [""]; // not all
const testForValidNumericalOperation = +argument;

const isInteger = Number.isNaN(testForValidNumericalOperation);
const isBashCharacter = bashSpecialCharacter.includes(argument);
const isIntergerNegative = argument < 0;

const isNotValidArgument = isInteger || isBashCharacter || isIntergerNegative;

if (isNotValidArgument) {
  console.error("L'argument doit être un entier positif.");
  process.exit();
}

const integerPositif = argument;

for (let i = 0; i < integerPositif; i++) {
  if (i ** 2 == integerPositif) {
    console.log(i);
    break;
  }
}

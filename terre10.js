const arguments = process.argv.splice(2);
const argument = arguments[0];

if (arguments.length !== 1) {
  console.error("Le programme à besoin de 1 argument pour fonctionner.");
  process.exit();
}

const bashSpecialCharacter = [""]; // not all
const numberToValidate = +argument;

const isInteger = Number.isNaN(numberToValidate);
const isBashCharacter = bashSpecialCharacter.includes(argument);
const isIntergerNegative = argument < 0;

const isNotValidArgument = isInteger || isBashCharacter || isIntergerNegative;

if (isNotValidArgument) {
  console.error("L'argument doit être un entier naturel.");
  process.exit();
}

const isPrimeMessage = `Oui, ${argument} est un nombre premier.`;
const isCompositeMessage = `Non, ${argument} n'est pas un nombre premier.`;

const exceptionNumber = [0, 1];

if (exceptionNumber.includes(+argument)) {
  console.log(isCompositeMessage);
  process.exit();
}

const onlyEvenPrimeNumber = 2;
if (argument == onlyEvenPrimeNumber) {
  console.log(isPrimeMessage);
  process.exit();
}

for (let i = 0; i < argument; i++)
  if (Number.isInteger(argument / i) && argument / i != argument) {
    console.log(isCompositeMessage);
    process.exit();
  }

console.log(isPrimeMessage);

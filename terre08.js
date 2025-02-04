const arguments = process.argv.splice(2);
const number = arguments[0];
const exposant = arguments[1];

if (arguments.length !== 2) {
  console.error("Le programme à besoin de 2 argument pour fonctionner.");
  process.exit();
}

const bashSpecialCharacter = [""]; // not all
const testIsAValidNumericalOperation = +number && +exposant;

if (
  Number.isNaN(testIsAValidNumericalOperation) ||
  bashSpecialCharacter.includes(number && exposant)
) {
  console.error("Les arguments doivent être des entiers.");
  process.exit();
}

if (exposant < 0) {
  console.error("L'exposant doit être un entier positif.");
  process.exit();
}

const power = number ** exposant;

console.log(power);

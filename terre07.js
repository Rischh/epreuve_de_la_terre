const arguments = process.argv.slice(2);
const argument = arguments[0];

if (arguments.length !== 1) {
  console.error("Le programme à besoin d'un argument pour fonctionner.");
  process.exit();
}

if (argument === "") {
  console.log(0);
  process.exit();
}

const testIsAValidNumericalOperation = +argument;

if (!Number.isNaN(testIsAValidNumericalOperation)) {
  console.error("L'argument doit être une chaine de caractères.");
  process.exit();
}

const array = argument.split("");
let length;

for (let i = 0; i < array.length; i++) {
  length = i + 1;
}

console.log(length);

const arguments = process.argv.slice(2);
const dividend = arguments[0];
const divisor = arguments[1];

if (arguments.length !== 2) {
  console.error("Le programme à besoin de 2 argument pour fonctionner.");
  process.exit();
}

const bashSpecialCharacter = [""]; // not all
const numbersToValidate = +dividend && +divisor;

if (
  Number.isNaN(numbersToValidate) ||
  bashSpecialCharacter.includes(dividend && divisor)
) {
  console.error("L'argument doit être un entier.");
  process.exit();
}

if (dividend < divisor) {
  console.error("Le diviseur doit être inférieur au divisé.");
  process.exit();
}

const notAValidDivisor = 0;

if (divisor == notAValidDivisor) {
  console.error("La division n'est pas possible si le diviseur est '0'");
  process.exit();
}

const uselessDivisor = 1;

if (divisor == uselessDivisor) {
  console.error("La division est inutile si le diviseur est '1'");
  process.exit();
}

const quotient = Math.floor(dividend / divisor);
const remainder = dividend % divisor;

const euclideanDivision = `quotient: ${quotient} \nreste: ${remainder}`;

console.log(euclideanDivision);

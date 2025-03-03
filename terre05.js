const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error("Le programme a besoin de 2 argument pour fonctionner.");
  process.exit();
}

const dividend = +args[0];
const divisor = +args[1];

if (isNaN(dividend) || isNaN(divisor)) {
  console.error("Les arguments doivent être des nombres entiers.");
  process.exit();
}

const notAValidDivisor = 0;

if (divisor === notAValidDivisor) {
  console.error("La division n'est pas possible si le diviseur est '0'");
  process.exit();
}

const quotient = (dividend / divisor).toString();

let floorQuotient = "";

for (let i = 0; i < quotient.length; i++) {
  if (quotient[i] === ".") break;
  floorQuotient += quotient[i];
}

floorQuotient = +floorQuotient;
const remainder = dividend % divisor;

const euclideanDivision = `quotient: ${floorQuotient} \nreste: ${remainder}`;

console.log(euclideanDivision);

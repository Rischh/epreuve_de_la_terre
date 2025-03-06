const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error("Le programme a besoin de 2 argument pour fonctionner.");
  process.exit();
}

const firstArg = args[0];
const secondArg = args[1];

if (
  firstArg === "" ||
  secondArg === "" ||
  !Number.isInteger(+firstArg) ||
  !Number.isInteger(+secondArg)
) {
  console.error("Les arguments doivent être des nombres entiers.");
  process.exit();
}

const dividend = +firstArg;
const divisor = +secondArg;

if (divisor === 0) {
  console.error("La division n'est pas possible si le diviseur est '0'");
  process.exit();
}

const quotient = String(dividend / divisor);

let floorQuotient = "";

for (let i = 0; i < quotient.length; i++) {
  if (quotient[i] === ".") break;
  floorQuotient += quotient[i];
}

floorQuotient = +floorQuotient;
const remainder = dividend % divisor;

const euclideanDivision = `quotient: ${floorQuotient}
reste: ${remainder}`;

console.log(euclideanDivision);

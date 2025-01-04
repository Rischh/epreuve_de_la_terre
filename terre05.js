const { argv } = require("node:process");

// Euclidean Division
const division = (firstArg, secondArg) => {
  const quotient = Math.floor(firstArg / secondArg);
  const remainder = firstArg % secondArg;

  return `quotient: ${quotient} \nreste: ${remainder}`;
};

const errorHandling = (firstArg, secondArg) => {
  if (firstArg < secondArg) throw new Error("Erreur");
  if (secondArg == 0 || secondArg == 1) throw new Error("Erreur");
};

const arg = argv.slice(2);

const firstArg = arg[0];
const secondArg = arg[1];

try {
  errorHandling(firstArg, secondArg);
  const result = division(firstArg, secondArg);
  console.log(result);
} catch (e) {
  console.error(e.message);
}

const { argv } = require("node:process");

const isPrime = (arg) => {
  const exceptionNumber = [0,1]
  const onlyEvenPrimeNumber = 2

  if(exceptionNumber.includes(arg)) return `Non, ${arg} n'est pas un nombre premier.`;
  if (arg == onlyEvenPrimeNumber) return `Oui, ${arg} est un nombre premier.`; 

  for (let i = 2; i < arg; i++) {
    if (Number.isInteger(arg / i)) return `Non, ${arg} n'est pas un nombre premier.`;
  };
  return `Oui, ${arg} est un nombre premier.`;
}
const arg = Number(argv.splice(2)[0]);

const result = isPrime(arg);

console.log(result);

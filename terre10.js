const args = process.argv.splice(2);

if (args.length !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.");
  process.exit();
}

const arg = args[0];

if (arg === "" || !Number.isInteger(+arg)) {
  console.error("L'argument doit être un entier.");
  process.exit();
}

const number = +arg;

if (number < 0) {
  console.error("L'argument doit être un entier positif.");
  process.exit();
}

const compositeMessage = `Non, ${number} n'est pas un nombre premier.`;

const exceptionNumbers = [0, 1];

if (exceptionNumbers.includes(number)) {
  console.log(compositeMessage);
  process.exit();
}

for (let i = 2; i < number; i++)
  if (number % i === 0) {
    console.log(compositeMessage);
    process.exit();
  }
console.log(`Oui, ${number} est un nombre premier.`);

const args = process.argv.splice(2);

if (args.length !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.");
  process.exit();
}

const arg = parseInt(args[0]);

if (isNaN(arg)) {
  console.error("L'argument doit être un nombre.");
  process.exit();
}

if (arg < 0) {
  console.error("L'argument doit être un entier naturel.");
  process.exit();
}

const compositeMessage = `Non, ${arg} n'est pas un nombre premier.`;

const exceptionNumbers = [0, 1];

if (exceptionNumbers.includes(arg)) {
  console.log(compositeMessage);
  process.exit();
}

for (let i = 2; i < arg; i++)
  if (arg % i === 0) {
    console.log(compositeMessage);
    process.exit();
  }
console.log(`Oui, ${arg} est un nombre premier.`);

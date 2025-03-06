const args = process.argv.splice(2);

if (args.length !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.");
  process.exit();
}

const arg = args[0];

if (arg === "" || !Number.isInteger(+arg)) {
  console.error("Le programme a besoin d'un entier.");
  process.exit();
}

const number = +arg;

if (number < 0) {
  console.error("L'entier doit être positif.");
  process.exit();
}

for (let i = 0; i < number; i++)
  if (i ** 2 === number) {
    console.log(i);
    break;
  }

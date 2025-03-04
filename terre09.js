const args = process.argv.splice(2);

if (args.length !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.");
  process.exit();
}

const arg = parseInt(args[0]);

if (isNaN(arg)) {
  console.error("Le programme a besoin d'un nombre.");
  process.exit();
}

if (arg < 0) {
  console.error("Le nombre doit être un entier positif.");
}

for (let i = 0; i <= arg; i++)
  if (i ** 2 === arg) {
    console.log(i);
    break;
  }

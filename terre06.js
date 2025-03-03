const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("Le programme a besoin d'un argument pour fonctionner.");
  process.exit();
}

const arg = args[0];

if (arg.length === 0) {
  console.error("L'argument ne peut pas être une chaine vide.");
  process.exit();
}

let reverseArg = "";

for (let i = arg.length - 1; i >= 0; i--) {
  reverseArg += arg[i];
}

console.log(reverseArg);

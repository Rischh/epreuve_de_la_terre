const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.");
  process.exit();
}

const arg = args[0];

if (!Number.isNaN(parseInt(arg))) {
  console.error("L'argument doit être une chaine de caractères.");
  process.exit();
}

if (arg === "") {
  console.log(0);
  process.exit();
}

let lengthOfString;

for (let i = 0; arg[i]; i++) {
  lengthOfString = i + 1;
}

console.log(lengthOfString);

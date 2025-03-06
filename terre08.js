const args = process.argv.splice(2);

if (args.length !== 2) {
  console.error("Le programme a besoin de 2 argument pour fonctionner.");
  process.exit();
}

const firstArg = args[0];
const secondArg = args[1];

if (firstArg === "" || secondArg === "" || isNaN(firstArg) || isNaN(secondArg)) {
  console.error("Les arguments doivent être des nombres.");
  process.exit();
}

const base = +firstArg;
const exposant = +secondArg;

if (exposant < 0) {
  console.error("L'exposant doit être un nombre positif.");
  process.exit();
}

if (base === 0 && exposant === 0) {
  console.error(
    "Le puissance de 0 sur 0 est une expression mathematiquement indeterminée."
  );
  process.exit();
}

let power = base ** exposant;

console.log(power);

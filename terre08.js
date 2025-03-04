const args = process.argv.splice(2);

if (args.length !== 2) {
  console.error("Le programme a besoin de 2 argument pour fonctionner.");
  process.exit();
}

const number = parseInt(args[0]);
const exposant = parseInt(args[1]);

if (isNaN(number) || isNaN(exposant)) {
  console.error("Les arguments doivent être des entiers.");
  process.exit();
}

if (exposant < 0) {
  console.error("L'exposant doit être un entier positif.");
  process.exit();
}

if (number === 0 && exposant === 0) {
  console.error(
    "Le puissance de 0 sur 0 est une expression mathematiquement indeterminee."
  );
  process.exit();
}

let power = number ** exposant;

console.log(power);

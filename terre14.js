const args = process.argv.splice(2);

if (args.length < 2) {
  console.error("Le programme a besoin d'au moins 2 arguments.");
  process.exit();
}

const numbers = [];

for (let i = 0; i < args.length; i++) {
  if (args[i] === "" || !Number.isInteger(+args[i])) {
    console.error("Le programme a besoin d'une liste d'entiers.");
    process.exit();
  } else numbers.push(+args[i]);
}

for (let i = 1; i < numbers.length; i++)
  if (numbers[i] < numbers[i - 1]) {
    console.log("Pas triée !");
    process.exit();
  }

console.log("Triée !");

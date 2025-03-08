const args = process.argv.slice(2)

if (args.length !== 1) {
  console.error("Le programme a besoin de 1 argument pour fonctionner.")
  process.exit()
}

if (isNaN(args[0])) {
  console.error("L'argument doit être un nombre entier.")
  process.exit()
}

const number = +args[0]

const evenOrOdd = number % 2 === 0 ? "Pair" : "Impair"

console.log(evenOrOdd)

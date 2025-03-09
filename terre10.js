const args = process.argv.slice(2)

if (args.length !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.")
  process.exit()
}

if (isNaN(args[0])) {
  console.error("L'argument doit être un nombre entier.")
  process.exit()
}

const number = +args[0]

if (number < 0) {
  console.error("L'argument doit être un entier positif.")
  process.exit()
}

let isPrimeNumber = true

const exceptionNumbers = [0, 1]

if (exceptionNumbers.includes(number)) isPrimeNumber = false

for (let i = 2; i < number; i++) {
  if (number % i === 0) isPrimeNumber = false
}

if (isPrimeNumber) {
  console.log(`Oui, ${number} est un nombre premier.`)
  process.exit()
}
console.log(`Non, ${number} n'est pas un nombre premier.`)

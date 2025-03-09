const args = process.argv.slice(2)

if (args.length !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.")
  process.exit()
}

if (isNaN(args[0])) {
  console.error("Le programme a besoin d'un nombre entier.")
  process.exit()
}

const number = +args[0]

if (number < 0) {
  console.error("Le nombre doit être un entier positif.")
  process.exit()
}

for (let i = 0; i < number; i++) {
  if (i * i === number) {
    console.log(i)
    process.exit()
  }
}
console.log("Le nombre n'a pas de racine carré exact.")

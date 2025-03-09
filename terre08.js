const args = process.argv.slice(2)

if (args.length !== 2) {
  console.error("Le programme a besoin de 2 argument pour fonctionner.")
  process.exit()
}

for (const arg of args) {
  if (isNaN(arg)) {
    console.error("Les arguments doivent être des nombres.")
    process.exit()
  }
}

const base = +args[0]
const exponant = +args[1]

if (exponant < 0) {
  console.error("L'exposant doit être un nombre positif.")
  process.exit()
}

if (base === 0 && exponant === 0) {
  console.error("Le puissance de 0 sur 0 est une expression mathematiquement indeterminée.")
  process.exit()
}

let power = base

for (let i = 1; i < exponant; i++) {
  power *= base
}

console.log(power)

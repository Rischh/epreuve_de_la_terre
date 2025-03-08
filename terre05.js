const args = process.argv.slice(2)

if (args.length !== 2) {
  console.error("Le programme a besoin de 2 argument pour fonctionner.")
  process.exit()
}

for (const arg of args) {
  if (isNaN(arg)) {
    console.error("Les arguments doivent être des nombres entiers.")
    process.exit()
  }
}

const dividend = +args[0]
const divisor = +args[1]

if (divisor === 0) {
  console.error("La division n'est pas possible si le diviseur est '0'.")
  process.exit()
}

if (divisor > dividend) {
  console.error("Le diviseur doit être plus petit que le dividend.")
  process.exit()
}

const quotient = String(dividend / divisor)

let trunkQuotient = ""

for (let i = 0; i < quotient.length; i++) {
  if (quotient[i] === ".") break
  trunkQuotient += quotient[i]
}

const remainder = dividend % divisor

const euclideanDivision = `quotient: ${trunkQuotient}
reste: ${remainder}`

console.log(euclideanDivision)

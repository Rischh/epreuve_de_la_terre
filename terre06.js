const args = process.argv.slice(2)

if (args.length !== 1) {
  console.error("Le programme a besoin d'un argument pour fonctionner.")
  process.exit()
}

const valueStr = args[0]

if (valueStr.length === 0) {
  console.error("L'argument ne peut pas être une chaine vide.")
  process.exit()
}

let reverseString = ""

for (let i = valueStr.length - 1; i >= 0; i--) {
  reverseString += valueStr[i]
}

console.log(reverseString)

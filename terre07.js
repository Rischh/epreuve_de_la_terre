const args = process.argv.slice(2)

let lenghtOfArgs = ""

for (let i = 0; args[i]; i++) {
  lenghtOfArgs = i + 1
}

if (lenghtOfArgs !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.")
  process.exit()
}

const valueStr = args[0]

if (!isNaN(valueStr)) {
  console.error("L'argument ne doit pas être un nombre.")
  process.exit()
}

let lengthOfString

for (let i = 0; valueStr[i]; i++) {
  lengthOfString = i + 1
}

console.log(lengthOfString)

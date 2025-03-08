const args = process.argv.slice(2)

if (args.length !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.")
  process.exit()
}

if (args[0].length > 1) {
  console.error("L'argument doit contenir qu'un seul caractère.")
  process.exit()
}

const letterAscii = args[0].charCodeAt()

if (letterAscii < 97 || letterAscii > 122) {
  console.error("Le caractère doit être une lettre minuscule.")
  process.exit()
}

let alphabet = ""

for (let i = letterAscii; i <= 122; i++) {
  alphabet += String.fromCharCode(i)
}

console.log(alphabet)

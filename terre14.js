const args = process.argv.slice(2)

if (args.length < 2) {
  console.error("Le programme a besoin d'au moins 2 arguments.")
  process.exit()
}

const numbers = []

for (const arg of args) {
  if (isNaN(arg)) {
    console.error("Le programme a besoin d'une liste de nombres entiers.")
    process.exit()
  }
  numbers.push(+arg)
}

let isSorted = true

for (let i = 1; i < numbers.length; i++)
  if (numbers[i] < numbers[i - 1]) isSorted = false

if (isSorted) {
  console.log("Triée !")
} else console.log("Pas Triée !")

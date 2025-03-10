const args = process.argv.slice(2)

if (args.length !== 3) {
  console.error("Le programme a besoin de 3 arguments pour fonctionner.")
  process.exit()
}

for (const arg of args) {
  if (isNaN(arg)) {
    console.error("Le programme a besoin de 3 entiers.")
    process.exit()
  }
}

const a = +args[0]
const b = +args[1]
const c = +args[2]

if (a === b || a === c || b === c) {
  console.error("Le programme a besoin de 3 entiers non egaux.")
  process.exit()
}

if ((a > b && a < c) || (a < b && a > c)) console.log(a)
else if ((b > a && b < c) || (b < a && b > c)) console.log(b)
else console.log(c)

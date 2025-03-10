const args = process.argv.slice(2)

if (args.length !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.")
  process.exit()
}

const time = args[0]
const timeFormatRegex = /^[0-1]\d|[2][0-3]:[0-5]\d$/

if (!timeFormatRegex.test(time)) {
  console.error(`Le programme a besoin d'un argument en format 24H:
HH:MM`)
  process.exit()
}

const hours = Number(time[0] + time[1])
const minutes = time[3] + time[4]

let twelveHours = hours
let meridian = "AM"

if (hours === 12) {
  meridian = "PM"
} else if (hours === 0) {
  twelveHours = 12
} else if (hours > 12) {
  twelveHours -= 12
  meridian = "PM"
}

console.log(`${twelveHours}:${minutes}${meridian}`)

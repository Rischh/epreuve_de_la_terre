const args = process.argv.slice(2)

if (args.length !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.")
  process.exit()
}

const time = args[0]
const timeFormatRegex = /^(0[1-9]|1[0-2]):[0-5]\d[AP]M$/i

if (!timeFormatRegex.test(time)) {
  console.error(`Le programme a besoin d'un argument en format 12H:
hh:mmAM ou PM`)
  process.exit()
}

const hours = Number(time[0] + time[1])
const minutes = time[3] + time[4]
const meridian = (time[5] + time[6]).toUpperCase()

let twentyFourHours = hours

if (hours === 12 && meridian === "PM") twentyFourHours = 12
else if (hours === 12 && meridian === "AM") twentyFourHours = "00"
else if (meridian === "PM") twentyFourHours += 12

console.log(`${twentyFourHours}:${minutes}`)

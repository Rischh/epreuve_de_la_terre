const args = process.argv.splice(2);

if (args.length !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.");
  process.exit();
}

const timeFormat12HRegex = /^([0][0-9]|[1][0-2]):([0-5][0-9])(AM|PM)$/;
const arg = args[0];

if (!timeFormat12HRegex.test(arg)) {
  console.error(`Le programme a  besoin d'un argument en format 12H:
hh:mmAM`);
  process.exit();
}

const hours = Number(arg[0] + arg[1]);
const minutes = Number(arg[3] + arg[4]);
const meridian = Number(arg[5] + arg[6]);
const meridianAM = "AM";
const meridianPM = "PM";

if (hours === 12 && meridian === meridianPM) twentyFourHour = 12;
else if (hours === 12 && meridian === meridianAM) twentyFourHour = "00";
else if (meridian === meridianAM) twentyFourHour = hours;
else twentyFourHour = hours + 12;

console.log(`${twentyFourHour}:${minutes}`);

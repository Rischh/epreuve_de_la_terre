const arguments = process.argv.splice(2);
const argument = arguments[0];

const timeFormat12HRegex = /^([0][0-9]|[1][0-2]):([0-5][0-9])(AM|PM)$/;

if (arguments.length !== 1) {
  console.error("Le programme à besoin de 1 argument pour fonctionner.");
  process.exit();
}

if (argument.search(timeFormat12HRegex) === -1) {
  console.error(`Le programme à besoin d'un argument en format 12H:
hh:mmAM`);
  process.exit();
}

const array = argument.split("");

const hour = array[0] + array[1];
const minutes = array[3] + array[4];
const meridian = array[5] + array[6];
const meridianAM = "AM";
const meridianPM = "PM";

if (hour == 12 && meridian == meridianPM) twentyFourHour = 12;
else if (hour == 12 && meridian == meridianAM) twentyFourHour = "00";
else if (meridian == meridianAM) twentyFourHour = hour;
else twentyFourHour = Number(hour) + 12;

const twentyFourFormat = `${twentyFourHour}:${minutes}`;

console.log(twentyFourFormat);

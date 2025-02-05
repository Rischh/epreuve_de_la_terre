const arguments = process.argv.splice(2);

const argument = arguments[0];

const timeFormat24HRegex = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;

if (arguments.length !== 1) {
  console.error("Le programme à besoin de 1 argument pour fonctionner.");
  process.exit();
}

if (argument.search(timeFormat24HRegex) === -1) {
  console.error(`Le programme à besoin d'un argument en format 24H:
HH:MM`);
  process.exit();
}

const array = argument.split("");

const hour = array[0] + array[1];
const minutes = array[3] + array[4];
const meridianAM = "AM";
const meridianPM = "PM";

let twelveHour, meridian;

if (hour == 12) {
  twelveHour = 12;
  meridian = meridianPM;
} else if (hour == 0) {
  twelveHour = 12;
  meridian = meridianAM;
} else if (hour == 22 || hour == 23) {
  twelveHour = hour - 12;
  meridian = meridianPM;
} else if (hour < 12) {
  twelveHour = hour;
  meridian = meridianAM;
} else {
  twelveHour = "0" + (hour - 12);
  meridian = meridianPM;
}

const twelveHourFormat = `${twelveHour}:${minutes}${meridian}`;

console.log(twelveHourFormat);

const args = process.argv.splice(2);

if (args.length !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.");
  process.exit();
}

const arg = args[0];
const timeFormat24HRegex = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;

if (!timeFormat24HRegex.test(arg)) {
  console.error(`Le programme a besoin d'un argument en format 24H:
HH:MM`);
  process.exit();
}

const hours = Number(arg[0] + arg[1]);
const minutes = Number(arg[3] + arg[4]);
const meridianAM = "AM";
const meridianPM = "PM";

let twelveHour, meridian;

if (hours === 12) {
  twelveHour = 12;
  meridian = meridianPM;
} else if (hours === 0) {
  twelveHour = 12;
  meridian = meridianAM;
} else if (hours === 22 || hours === 23) {
  twelveHour = hours - 12;
  meridian = meridianPM;
} else if (hours < 12) {
  twelveHour = hours;
  meridian = meridianAM;
} else {
  twelveHour = "0" + (hours - 12);
  meridian = meridianPM;
}

console.log(`${twelveHour}:${minutes}${meridian}`);

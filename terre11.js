const { argv } = require("node:process");

const toTwelveHourFormat = (arg) => {
  const list = arg.split("");

  const hour = list[0] + list[1];
  const minutes = list[3] + list[4];
  const meridianAM = "AM";
  const meridianPM = "PM";

  let twelveHour = null;
  let meridian = "";

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

  return `${twelveHour}:${minutes}${meridian}`;
};

const arg = argv.splice(2)[0];

const result = toTwelveHourFormat(arg);

console.log(result);

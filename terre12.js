const { argv } = require("node:process");

const toTwentyFourHourFormat = (arg) => {
  const list = arg.split("");

  const hour = list[0] + list[1];
  const minutes = list[3] + list[4];
  const meridian = list[5] + list[6];
  const meridianAM = "AM";
  const meridianPM = "PM";

  if (hour == 12 && meridian == meridianPM) twentyFourHour = 12;
  else if (hour == 12 && meridian == meridianAM) twentyFourHour = "00";
  else if (meridian == meridianAM) twentyFourHour = hour;
  else twentyFourHour = Number(hour) + 12;

  return `${twentyFourHour}:${minutes}`;
};

const arg = argv.splice(2)[0];

const result = toTwentyFourHourFormat(arg);

console.log(result);

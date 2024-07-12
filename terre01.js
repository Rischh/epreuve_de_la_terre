const path = require("node:path");

const ProgramName = () => {
  // avec le module argv
  // const { argv } = require("node:process");
  // const path = arg[1];
  // const array_path = path.split("/");
  // return array_path[array_path.length - 1];

  return path.basename(__filename);
};

const result = ProgramName();

console.log(result);

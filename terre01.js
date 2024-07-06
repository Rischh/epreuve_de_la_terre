const ProgramName = () => {
  const path = argv[1];
  const array = path.split("/");
  return array[array.length - 1];
};

const { argv } = require("node:process");

const result = ProgramName(argv);

console.log(result);

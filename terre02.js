const { argv } = require("node:process");

const detectArg = (arg) => {
  if (arg.length === 0) {
    throw new Error(
      "Le programme à besoin d'au moins un argument pour fonctionner"
    );
  }
};

const arg = argv.slice(2);

try {
  detectArg(arg);
  arg.forEach((e) => console.log(e));
} catch (e) {
  console.error(e.message);
}

const { argv } = require("node:process");

const isEven = (arg) => {
  return arg % 2 === 0 ? "Pair" : "Impair";
};

const errorHandling = (arg) => {
  const arg_type = +arg[0];

  if (arg.length === 0 || arg.length > 1) {
    throw new RangeError(
      "Le programme à besoin de 1 argument pour fonctionner"
    );
  } else if (Number.isNaN(arg_type)) {
    throw new TypeError("L'argument doit être un chiffre ou un nombre");
  }
};

const arg = argv.slice(2);

try {
  errorHandling(arg);

  const result = isEven(arg);
  console.log(result);
} catch (e) {
  console.error(e.message);
}

const { argv } = require("node:process");

const generateAlphabet = () => {
  const alphabet = [];

  for (let a = 97; a <= 122; a++) {
    alphabet.push(String.fromCharCode(a));
  }

  // return a alphabet in a Array
  return alphabet;
};

const findLetterInAlphabet = (arg, alphabet) => {
  const letter = arg.join("");
  return alphabet.indexOf(letter);
};

const startAlphabetAt = (index, alphabet) => {
  let string = "";

  for (let i = index; i < alphabet.length; i++) {
    string += alphabet[i];
  }

  return string;
};

const errorHandling = (arg) => {
  const arg_type = +arg[0];

  if (arg.length === 0 || arg.length > 1) {
    throw new RangeError(
      "Le programme à besoin de 1 argument pour fonctionner"
    );
  } else if (!Number.isNaN(arg_type)) {
    throw new TypeError("L'argument doit être une lettre");
  } else if (arg[0].length > 1) {
    throw new RangeError("L'argument doit contenir qu'une seule lettre");
  }
};

const arg = argv.slice(2);

try {
  errorHandling(arg);

  const alphabet = generateAlphabet();
  const index = findLetterInAlphabet(arg, alphabet);

  const result = startAlphabetAt(index, alphabet);
  console.log(result);
} catch (e) {
  console.error(e.message);
}

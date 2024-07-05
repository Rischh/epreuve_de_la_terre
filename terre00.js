const displayAlphabet = (alphabet) => {
  //   alphabet.reduce((string, letter) => string + letter);

  let string = "";

  for (let i = 0; i < alphabet.length; i++) {
    string = string + alphabet[i];
  }

  return string;
};

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const result = displayAlphabet(alphabet);

console.log(result);

const generateAlphabet = () => {
  const alphabet = [];

  for (let a = 97; a <= 122; a++) {
    alphabet.push(String.fromCharCode(a));
  }

  // return a alphabet in a Array
  return alphabet;
};

const AlphabetInLine = (alphabet) => {
  let string = "";

  //   alphabet.reduce((string, letter) => string + letter);

  for (let i = 0; i < alphabet.length; i++) {
    string += alphabet[i];
  }

  return string;
};

const alphabet = generateAlphabet();

const result = AlphabetInLine(alphabet);

console.log(result);

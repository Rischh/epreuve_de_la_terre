const displayAlphabet = (alphabet) => {
  let oneLine = "";

  //   alphabet.reduce((oneLine, letter) =>  + letter);
  for (letter of alphabet) oneLine += letter;

  return oneLine;
};

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

const result = displayAlphabet(alphabet);

console.log(result);

const arguments = process.argv.slice(2);
const argument = arguments[0];

if (arguments.length !== 1) {
  console.error("Le programme à besoin d'un unique argument pour fonctionner.");
  process.exit();
}

if (argument.length > 1) {
  console.error("L'argument doit contenir qu'une seule lettre minuscule.");
  process.exit();
}

const bashSpecialCharacter = ["", ">"]; // not all
const charASCII = argument.charCodeAt();

if (
  charASCII < 97 ||
  charASCII > 122 ||
  bashSpecialCharacter.includes(argument)
) {
  console.error("L'argument doit être une lettre minuscule.");
  process.exit();
}

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

const indexOfLetter = alphabet.indexOf(argument);

let alphabetInLine = "";

for (let i = indexOfLetter; i < alphabet.length; i++) {
  alphabetInLine += alphabet[i];
}

console.log(alphabetInLine);

const arguments = process.argv.slice(2);

if (arguments.length !== 1) {
  console.error("Le programme a besoin d'un unique argument pour fonctionner.");
  process.exit();
}

if (arguments[0].length > 1) {
  console.error("L'argument doit contenir qu'une seule lettre minuscule.");
  process.exit();
}

const letter = arguments[0];

const letterAscii = letter.charCodeAt();

if (letterAscii < 97 || letterAscii > 122) {
  console.error("L'argument doit être une lettre minuscule.");
  process.exit();
}

let alphabet = "";

for (let i = letterAscii; i <= 122; i++) {
  alphabet += String.fromCharCode(i);
}

console.log(alphabet);

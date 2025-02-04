const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

let alphabetInLine = "";

for (const letter of alphabet) alphabetInLine += letter;

console.log(alphabetInLine);

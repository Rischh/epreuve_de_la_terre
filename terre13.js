const arguments = process.argv.splice(2);

if (arguments.length !== 3) {
  console.error("Le programme à besoin de 3 argument pour fonctionner.");
  process.exit();
}

const numbersToValidate = arguments.map(value => +value);
const hasInvalidNumbers =
  numbersToValidate.filter(value => Number.isNaN(value)).length > 0;

const bashSpecialCharacter = [""]; // not all

for (let i = 0; i < arguments.length; i++) {
  if (hasInvalidNumbers || bashSpecialCharacter.includes(arguments[i])) {
    console.error("L'argument doit être un entier.");
    process.exit();
  }
  for (let j = i + 1; j < arguments.length; j++) {
    if (arguments[i] === arguments[j]) {
      console.error("Les arguments ne doivent pas être égaux.");
      process.exit();
    }
  }
}

let max = 0;

for (value of arguments) if (max < value) max = value;

let middle = 0;

for (value of arguments) {
  if (value == max) continue;
  if (middle < value) middle = value;
}

console.log(middle);

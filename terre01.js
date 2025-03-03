const path = process.argv[1];

const SLASH_CHAR_CODE = 47;
const BACK_SLASH_CHAR_CODE = 92;

let programName = "";

for (let i = 0; i < path.length; i++) {
  if (
    path[i].charCodeAt() === SLASH_CHAR_CODE ||
    path[i].charCodeAt() === BACK_SLASH_CHAR_CODE
  ) {
    programName = "";
    continue;
  }
  programName += path[i];
}

console.log(programName);

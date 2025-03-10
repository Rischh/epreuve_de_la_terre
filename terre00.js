let alphabet = ""

const LOWERCASE_A_CHAR_CODE = 97
const LOWERCASE_Z_CHAR_CODE = 122

for (let i = LOWERCASE_A_CHAR_CODE; i <= LOWERCASE_Z_CHAR_CODE; i++) {
  alphabet += String.fromCharCode(i)
}

console.log(alphabet)

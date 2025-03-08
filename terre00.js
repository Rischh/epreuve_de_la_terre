let alphabet = ""

const LOWERCASE_A_CHAR_CODE = 97
const UPPERCASE_Z_CHAR_CODE = 122

for (let i = LOWERCASE_A_CHAR_CODE; i <= UPPERCASE_Z_CHAR_CODE; i++) {
  alphabet += String.fromCharCode(i)
}

console.log(alphabet)

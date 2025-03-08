const path = process.argv[1]

const SLASH_CHAR_CODE = 47
const BACK_SLASH_CHAR_CODE = 92

let fileName = ""

for (const char of path) {
  if (char.charCodeAt() === SLASH_CHAR_CODE || char.charCodeAt() === BACK_SLASH_CHAR_CODE) {
    fileName = ""
    continue
  }
  fileName += char
}

console.log(fileName)

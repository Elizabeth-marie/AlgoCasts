// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let map = {}
  let count = 0
  let maxC = ''

  for (let char of str) {
    if (!map[char]) {
      map[char] = 1
    }
    else {
      map[char]++
    }
  }

  for (let max in map) {
    if (map[max] > count) {
      count = map[max]
      maxC = max
    }
  }
  return maxC
}

module.exports = maxChar;

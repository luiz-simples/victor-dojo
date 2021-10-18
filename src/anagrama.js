module.exports = (word) => {
  const len = word.length
  const words = []

  for (let index = 0; index < len; index++) {
    words.push(...getPossibilities(word, index))
  }

  return words
}


const getPossibilities = (word, index) => {
  const firstChar = word[index]
  console.log({firstChar, index, word})
  const chars = word.split('')
  chars.splice(index, 1)
  const newWord = chars.join('')
  const len = newWord.length
  if (!len) return []

  const words = [word]

  for (let i = 0; i < len; i++) {
    const possibilities = getPossibilities(newWord, i)
    console.log(possibilities)
    words.push(...possibilities.map((word) => `${firstChar}${word}`))
  }

  return words
}

module.exports = (a, b) => {
  if (b === null) throw new Error('factor is null')
  return a + b
}

const anagrama = require('../../src/anagrama');

it('Deve retornar a palavra biro', () => {
  expect(anagrama('biro')).toContain('biro');
});

it('Deve retornar a palavra biro', () => {
  expect(anagrama('biro')).toContain('bior');
});




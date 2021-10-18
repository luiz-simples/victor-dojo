const anagrama = require('../../src/anagrama');

it('Deve retornar a palavra biro', () => {
  expect(anagrama('biro')).toContain('biro');
});

it('Deve retornar a palavra bior', () => {
  expect(anagrama('biro')).toContain('bior');
});

it('Deve retornar a palavra brio', () => {
  expect(anagrama('biro')).toContain('brio');
});




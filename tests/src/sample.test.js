const sum = require('../../src/sum');

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('adds 10 + 3 to equal 13', () => {
  expect(sum(10, 3)).toBe(13);
});

it('adds 30 + 17 to equal 47', () => {
  expect(sum(30, 17)).toBe(47);
});

it('thorws when factor is null', () => {
  expect(() => sum(30, null)).toThrow('factor is null');
});

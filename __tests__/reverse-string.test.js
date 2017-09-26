const { Reverser } = require('../reverse-string');

test('valid assertions', () => {
  const reverser = new Reverser();

  expect(reverser.reverse()).toEqual('');
  expect(reverser.reverse('hello')).toEqual('olleh');
  expect(reverser.reverse('hell no')).toEqual('on lleh');
  expect(reverser.reverse(' hell no ')).toEqual(' on lleh ');
  expect(reverser.reverse('$nice$')).toEqual('$ecin$');
  expect(reverser.reverse('blue birds are nice')).toEqual('ecin era sdrib eulb');
});

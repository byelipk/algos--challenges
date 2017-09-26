const { WordReverser } = require('../reverse-words');

test('valid assumptions', () => {
  const reverser = new WordReverser();

  expect(reverser.reverse('cat the')).toEqual('the cat');
  expect(reverser.reverse('cat the ran')).toEqual('ran the cat');
  expect(reverser.reverse('world hello')).toEqual('hello world');
  expect(reverser.reverse('find you will pain only go you recordings security the into if')).toEqual('if into the security recordings you go only pain will you find');
});

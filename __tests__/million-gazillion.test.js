const Trie = require('../million-gazillion');

test('pizza', () => {
  const trie = new Trie();

  trie.add('pizza');

  expect(trie.find('pizza')).toBe(true);
});

test('piano', () => {
  const trie = new Trie();

  trie.add('piano');
  trie.add('pizza');

  expect(trie.find('piano')).toBe(true);
  expect(trie.find('pizza')).toBe(true);
  expect(trie.find('picasso')).toBe(false);
});

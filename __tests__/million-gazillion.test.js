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
  trie.add('purple');
  trie.add('fun');

  expect(trie.find('piano')).toBe(true);
  expect(trie.find('pizza')).toBe(true);
  expect(trie.find('purple')).toBe(true);
  expect(trie.find('fun')).toBe(true);
  expect(trie.find('picasso')).toBe(false);
  expect(trie.find('horatio')).toBe(false);
  expect(trie.find('sanscript')).toBe(false);
});

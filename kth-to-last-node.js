class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  add(value) {
    if (this.value === null) {
      this.value = value;
      return this;
    }

    this.next = new Node(value);
    return this.next;
  }
}

// We ended up with a pretty good solution.
// O(n) time complexity and O(1) space.
// What did I learn?
// Remember to add error handling!
// When something is O(n) that doesn't mean we can only use
// one loop.
function kthToLastNode(k, headNode) {
  if (k === 0) return headNode;
  if (k < 0) throw new Error('No negative numbers');

  var length = 1;
  var currentNode = headNode;

  while (currentNode.next) {
    currentNode = currentNode.next;
    length += 1;
  }

  if (k > length) {
    throw new Error('k is larger than the length of the list: ' + length);
  }

  var counter = 1;
  var kthNode = headNode;

  while ((length - counter) >= k) {
    kthNode = kthNode.next;
    counter += 1;
  }

  return kthNode;
}

module.exports = { Node, kthToLastNode }

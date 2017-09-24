class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  add(value) {
    this.next = new Node(value);
    return this.next;
  }
}

// O(n) time
// O(1) space
const reverse1 = function reverse1(head) {
  // (1) -> (2) ->
  // <- (1) <- (2)

  let current = head;
  let previous = null;
  let next = null;

  while (current) {
    next = current.next;

    current.next = previous;

    previous = current;
    current = next;
  }

  return previous;
}

module.exports = { Node, reverse1 }

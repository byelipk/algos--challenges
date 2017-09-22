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

// O(n) time complexity
// O(n) space complexity
const containsCycle1 = function containsCycle(list) {
  let currentNode = list;

  while (currentNode.next) {
    if (currentNode.visited) {
      return true;
    }

    currentNode.visited = true;
    currentNode = currentNode.next;
  }

  return false;
}

// O(n) time complexity
// O(n) space complexity
const containsCycle2 = function containsCycle2(list) {
  let counter = 0;
  let fastRunner = list.next;
  let slowRunner = list;

  while (true) {
    counter += 1;

    if (!fastRunner) return false;
    if (!fastRunner.next) return false;

    if (fastRunner === slowRunner) {
      return true;
    } else {
      fastRunner = fastRunner.next;
    }

    if (counter % 2 === 0) {
      slowRunner = slowRunner.next;
    }
  }
}

module.exports = { Node, containsCycle1, containsCycle2 };

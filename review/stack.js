const { LinkedList, ListNode } = require('./linked-list');

class Stack {
  constructor() {
    this._storage = new LinkedList();
    this._count = 0;
  }

  push(value) {
    this._count += 1;
    const newNode = new ListNode(value);
    newNode.next = this._storage.head;
    this._storage.head = newNode;
    return this._count;
  }

  pop() {
    const poppedNode = this._storage.head;

    if (poppedNode) {
      this._storage.head = poppedNode.next;
      this._count -= 1;

      return poppedNode.value;
    }
  }

  peek() {
    const peekedNode = this._storage.head;

    if (peekedNode) {
      return peekedNode.value;
    }
  }

  size() {
    return this._count;
  }
}

module.exports = { Stack }

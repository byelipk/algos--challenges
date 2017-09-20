class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addNext(val) {
    this.next = new ListNode(val);
    return this.next;
  }
}

class LinkedList {

  constructor() {
    this.head  = null;
  }

  traverse(fn) {
    let current = this.head;
    let last    = null;

    while (current) {
      const result = fn(current, last);
      last = current;
      current = current.next;
      if (result) break;
    }

    return last;
  }

  insertAt(node, val) {
    const newNode = new ListNode(val)
    newNode.next = node.next;
    node.next = newNode;
    return newNode;
  }

  append(val) {
    const newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
    }
    else {
      const lastNode = this.traverse(n => false);
      lastNode.next = newNode;
    }
    return newNode;
  }

  remove(node) {
    if (!this.head) {
      throw new Error('Cannot remove node from empty list');
    }

    if (node.value === this.head.value) {
      const oldHead = this.head;
      this.head = oldHead.next;
      return oldHead;
    }

    const deletedNode = this.traverse((n, last) => {
      if (n === node) {
        last.next = node.next;
        return n;
      }
    });

    return deletedNode;
  }
}

module.exports = { LinkedList, ListNode }

class Node {
  constructor(value) {
    this.value = value;
    this.next  = null;
    this.prev  = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  traverse(fn) {
    let current = this.head;

    while (current) {
      const result = fn(current);
      current = current.next;
      if (result) {
        return result;
      }
    }
  }

  insertAt(node, val) {
    const newNode = new Node(val);
    const nextNode = node.next;

    node.next      = newNode;
    newNode.prev   = node;
    newNode.next   = nextNode;

    if (nextNode) {
      nextNode.prev  = newNode;
    }

    return newNode;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    }
    else {
      const last = this.traverse((n) => {
        if (n.next === null) {
          return n;
        }
      });

      if (last) {
        last.next = newNode;
        newNode.prev = last;
      }
    }
    
    return newNode;
  }

  remove(node) {
    if (node.prev && node.next) {
      const prevNode = node.prev;
      const nextNode = node.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }

    else if (this.head === node) {
      this.head = node.next;
    }

    else if (node.prev && !node.next) {
      node.prev.next = node.next;
    }

    else {
      throw new Error('🤷‍');
    }

    return node;
  }
}

module.exports = { DoubleLinkedList, Node }

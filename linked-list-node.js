class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next  = null;
  }

  add(value) {
    this.next = new LinkedListNode(value);
    return this.next;
  }

  // Time complexity: O(1)
  // Space complexity: O(1)
  //
  // What are the potential side effects of this implementation?
  // Any references to the node we want to delete have effectively
  // been reassigned to nextNode.
  //
  // The second side effect is that if there are references to
  // the nodeToDelete's original nextNode, those references now
  // point to a dangling node. What I mean by a dangling node is
  // that it's a node we can't access by traversing the list.
  static delete(nodeToDelete) {
    const nextNode = nodeToDelete.next;

    if (nextNode) {
      nodeToDelete.value = nextNode.value;
      nodeToDelete.next  = nextNode.next;
    }
    else {
      throw new Error('Cannot delete node.');
    }

    return nodeToDelete;
  }
}

module.exports = LinkedListNode;

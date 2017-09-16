class BST {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  add(value) {
    const stack = [];

    stack.push(this);

    while(stack.length > 0) {
      let node = stack.pop();

      if (value <= node.value) {
        if (node.left) { stack.push(node.left); }
        else { node.left = new BST(value); }
      }
      else {
        if (node.right) { stack.push(node.right); }
        else { node.right = new BST(value); }
      }
    }

    return this;
  }

  findLargest(root) {
    let node = root || this;
    while(node.right) {
      node = node.right;
    }
    return node;
  }

  findSecondLargest() {
    let node = this;

    // Assume a valid tree means the root has two child nodes!!!
    if (!node.left && !node.right) {
      throw new Error('Tree must have at least 3 nodes. 😩');
    }

    while (node) {

      // We've come to the largest element, but we need to
      // explore it's left subtree to find the second largest.
      if (!node.right && node.left) {
        return this.findLargest(node.left);
      }

      // We've come to the parent of the largest node.
      // The largest node does not have a right or left
      // subtree, so we can return the node we're on.
      if (node.right && (!node.right.left && !node.right.right)) {
        return node;
      }

      // Keep searching
      node = node.right;
    }
  }
}

module.exports = BST;

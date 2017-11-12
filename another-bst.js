class BST {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  add(val) {
    var stack = [];

    if (this.val === null) {
      this.val = val;
      return this;
    }

    stack.push(this);

    while (stack.length > 0) {
      var node = stack.pop();

      if (val <= node.val) {
        // go left
        if (node.left) { stack.push(node.left) }
        else { node.left = new BST(val) }
      }
      else {
        // go right
        if (node.right) { stack.push(node.right) }
        else { node.right = new BST(val) }
      }
    }

    return this;
  }
}

function isBST(root) {
  var result = true;
  var stack = [];

  stack.push(root);

  while (stack.length > 0) {
    var node = stack.pop();

    if (node.left) {
      if (node.val < node.left.val) {
        result = false;
      }

      stack.push(node.left);
    }

    if (node.right) {
      if (node.val > node.right.val) {
        result = false;
      }

      stack.push(node.right);
    }
  }

  return result;
}
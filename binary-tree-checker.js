class BST {
  constructor(value) {
    this.value = (value === undefined) ? null : value;
    this.left  = null;
    this.right = null;
  }

  isLeaf() {
    return !this.left && !this.right;
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

  bfs(callback) {
    const queue = [];

    queue.push(this);

    while(queue.length > 0) {
      let node = queue.shift();

      if (callback) {
        callback(node);
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  dfs(callback) {
    const stack = [];

    stack.push([this]);

    while(stack.length > 0) {
      let [node] = stack.pop();

      if (callback) {
        callback(node);
      }

      if (node.right) {
        stack.push([node.right]);
      }

      if (node.left) {
        stack.push([node.left]);
      }
    }
  }

  findMin() {
    let node  = this;
    let depth = 0;

    while(node.left) {
      node = node.left;
      depth++;
    }

    return {node: node, depth: depth};
  }

  findMax() {
    let node  = this;
    let depth = 0;

    while(node.right) {
      node = node.right;
      depth++;
    }

    return {node: node, depth: depth};
  }

  isValid() {
    const stack = [];

    // What's is our "best answer so far"?
    stack.push([this, this.value, this.value]);

    while(stack.length > 0) {
      let [node, lower, upper] = stack.pop();

      // Prevent this code running against the tree root
      if (node !== this) {
        if (node.value < lower || node.value > upper) {
          return false;
        }
      }

      if (node.right) {
        stack.push([node.right, lower, node.right.value]);
      }

      if (node.left) {
        stack.push([node.left, node.left.value, lower]);
      }
    }

    return true;
  }
}

module.exports = BST;

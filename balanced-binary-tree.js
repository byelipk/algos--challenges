class BST {
  constructor(value) {
    if (value === undefined) value = null;

    this.value = value;
    this.left  = null;
    this.right = null;
  }

  // Time complexity: O(n)
  // Space complexity: O(n)
  insert(value) {
    if (value === undefined) {
      throw new Error('Cannot set node value to undefined.');
    }

    // Set root node value in case root node is empty.
    if (this.value === null) {
      this.value = value;
      return this;
    }

    const stack = [];   // the stack

    stack.push(this);   // push a new 'frame' onto the stack

    while(stack.length > 0) {
      let node = stack.pop();  // removing the last frame

      // Binary search trees always insert the smallest
      // value on the left side of the tree.
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

  // NOTE
  // Depth first search is like walking through a maze:
  // you explore one path, hit a dead end, go back
  // and try another one.
  //
  // DFS on a binary tree generally requires less memory
  // than breadth-first-search. DFS can be implemented with
  // recursion, however, here, I've chosen to implement
  // it with a bottom up approach using a stack which saves memory.
  //
  // A depth first search doesn't necessarily find the shortest
  // path to a node, while BFS does.
  // Time complexity: O(n)
  // Space complexity: O(n)
  dfs(callback) {

    // callback defaults to a NOOP
    if (!callback) callback = () => {}

    // the stack
    const stack = [];

    // adding a new stack frame
    stack.push(this);

    while (stack.length > 0) {
      let node = stack.pop();  // popping off the latest stack frame

      // apply the callback to the node
      callback(node);

      // NOTE
      // Since this is a depth-first-traversal
      // and since data flows through a stack
      // in a first in, last out manner,
      // we want to push ``node.right`` onto the
      // the stack now because we want to
      // apply the callback function to ``node.left``
      // before we apply it to ``node.right``.
      // Assuming there is a ``node.left``, it will be
      // popped off the stack before ``node.right``.
      if (node.right) {
        stack.push(node.right);
      }

      if (node.left) {
        stack.push(node.left);
      }
    }
  }

  // Time complexity: O(n)
  // Space complexity: O(n)
  bfs(callback) {
    const queue = [];

    // callback defaults to a NOOP
    if (!callback) callback = () => {}

    queue.push(this);

    while(queue.length > 0) {
      let node = queue.shift();

      // NOTE
      // Since this is a breadth-first-traversal
      // and since data flows through a queue
      // in a first in, first out manner,
      // we want to enqueue ``node.left`` onto the
      // the queue now because we want to
      // apply the callback function to ``node.left``
      // before we apply it to ``node.right``.
      // Assuming there is a ``node.right``, it will be
      // dequeued after ``node.left``.
      if (node.left) {
        queue.push(node.left);
      }

      callback(node);

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  // Time complexity: O(n)
  // Space complexity: O(1)
  findMin() {
    let node = this;

    while(node.left) {
      node = node.left;
    }

    return node;
  }

  // Time complexity: O(n)
  // Space complexity: O(1)
  findMax() {
    let node = this;

    while(node.right) {
      node = node.right;
    }

    return node;
  }

  isLeaf() {
    return !this.left && !this.right;
  }

  // NOTE
  // A tree is "superbalanced" if the difference between the
  // depths of any two leaf nodes is no greater than one.
  // We want to use a DFS traversal here because we can find
  // leaf nodes more quickly.
  isSuperBalanced() {
    if (this.isLeaf()) return true;

    const stack  = [];
    const depths = [];

    stack.push([this, 0]);

    while(stack.length > 0) {
      let [ node, depth ] = stack.pop();

      if (node.isLeaf()) {

        // Check if we have already seen this depth before.
        // If we have, just skip it.
        if (depths.indexOf(depth) < 0) {

          // Let's track this depth.
          depths.push(depth);

          // If we're tracking more than 2 different depths
          // then by definition the tree is not "superbalanced".
          if (depths.length > 2) return false;

          // We can only determine if the tree is not "superbalanced"
          // if we're tracking 2 different depths. If they are
          // more than 1 depth apart, then the tree is not "superbalanced".
          if (depths.length === 2 &&
              ((Math.abs(depths[0] - depths[1]) > 1))) return false;

          // We don't care if there is only one depth...

        }
      }
      else {
        if (node.right) {
          stack.push([node.right, depth + 1]);
        }

        if (node.left) {
          stack.push([node.left, depth + 1]);
        }
      }
    }

    // If we haven't short-circuited and return false by now
    // then the tree must be balanced.
    return true;
  }
}

module.exports = BST;

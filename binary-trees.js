class Node {
  constructor(options) {
    if (!options) options = {};

    this.value  = options.value  || 0;
    this.left   = options.left   || null;
    this.right  = options.right  || null;
  }

  isLeaf() {
    return !this.left && !this.right;
  }
}

// NOTE
// Look at how two different kinds of data structures can
// help us implement DFS and BFS!? Also notice how the kind
// of searching you do depends on which child node you want
// to traverse first.
//
// If we want to perform DFS with a stack, we need to push
// the value of the node to the right onto the stack first
// before we push the value of the node on the left into
// the stack. This is because a stack follows a first in,
// last out data flow. Since we want the values to bne printed
// out to the console sequentially, we need to push the greater
// value onto the stack before we push the lesser value.
//
// The lesser value will then be popped off of the stack before
// the greater value, and we can log it to the console.

function depthFirstTraverse(root) {
  const stack = [];

  stack.push(root);   // first in, last out

  while(stack.length > 0) {
    let node = stack.pop();

    console.log(node.value);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }
}

// Similarly, if we want to traverse a tree breadth first,
// we can do so with a queue, which uses a first in, first out
// data flow. Instead of pushing values along the right side
// into the queue first, like we did with DFS and stacks, we
// can push values along the left side first, then shift them
// off the queue!
//
// This is a great searching technique when we want to evaluate
// all of the parent nodes first, which we would be doing if
// we're validating a binary search tree.

function breadthFirstTraverse(root) {
  const queue = []; // first in, first, out

  queue.push(root);

  while (queue.length > 0) {
    let node = queue.shift();

    console.log(node.value);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
}

const n0 = new Node({value: 0});
const n1 = new Node({value: 1});
const n2 = new Node({value: 2});
const n3 = new Node({value: 3});
const n4 = new Node({value: 4});
const n5 = new Node({value: 5});
const n6 = new Node({value: 6});

n0.left = n1;
n0.right = n2;

n0.left.left = n3;
n0.left.right = n4;

n0.right.left = n5;
n0.right.right = n6;

depthFirstTraverse(n0);
breadthFirstTraverse(n0);

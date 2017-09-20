class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if (value <= this.value) {
      if (this.left) { this.left.add(value); }
      else           { this.left = new BST(value); }
    }
    else {
      if (this.right) { this.right.add(value); }
      else            { this.right = new BST(value); }
    }

    return this;
  }

  bfs() {
    const queue = [];

    queue.push(this)

    while (queue.length > 0) {
      const node  = queue.shift();

      console.log(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  dfs() {

    // Greedy strategy + stack + depth first
    const stack = [];

    stack.push({node: this});

    while (stack.length > 0) {
      const { node } = stack.pop();

      console.log(node.value);

      if (node.right) { stack.push({node: node.right}); }

      if (node.left) { stack.push({node: node.left}); }
    }
  }

  dfCount() {

    // Greedy strategy + stack + depth first
    const stack = [];

    let leftSideSum = 0;
    let rightSideSum = 0;

    stack.push({node: this});

    while (stack.length > 0) {
      const { node } = stack.pop();

      if (node.right) {
        rightSideSum += node.right.value;
        stack.push({node: node.right});
      }

      if (node.left) {
        leftSideSum += node.left.value;
        stack.push({node: node.left});
      }
    }

    console.log(leftSideSum, rightSideSum);
  }
}

const root1 = new BST(0);
root1.add(1).add(2).add(3).add(4).add(5).add(6);
// root1.dfCount();

const root2 = new BST(3);
root2.add(1).add(2).add(4).add(5);
// root2.dfCount();

const root3 = new BST(4);
root3.add(3).add(1).add(2).add(7).add(6).add(8);
// root3.dfCount();

root3.dfs();
console.log()
root3.bfs();

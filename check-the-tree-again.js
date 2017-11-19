function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

// **************************

function checkTheTree(root) {
  var stack = [];

  var lower = -Infinity;
  var upper = Infinity;

  stack.push({ node: root, lower: lower, upper: upper });

  while (stack.length) {
    var { node, lower, upper } = stack.pop();

    if (node.value >= upper || node.value <= lower) {
      return false;
    }

    if (node.right) {
      stack.push({ node: node.right, lower: node.value, upper: upper });
    }
    
    if (node.left) {
      stack.push({ node: node.left, lower: lower, upper: node.value });
    }
  }

  return true;
}

// *************************

function testOne() {
  var root = new BinaryTreeNode(10);
  root.insertLeft(5);
  root.insertRight(15);

  console.log( "Result: ", checkTheTree(root), "Expected:", true );
}

function testTwo() {
  var root = new BinaryTreeNode(10);
  root.insertLeft(12);
  root.insertRight(15);

  console.log( "Result: ", checkTheTree(root), "Expected:", false);
}

testOne();
testTwo();
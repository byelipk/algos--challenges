function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function (value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function (value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

// ********************

function isLeaf(node) {
  return !node.right && !node.left;
}

function isTooDeep(d1, d2) {
  return Math.abs(d1 - d2) > 1;
}

function isBalanced(root) {
  var depths = new Set();
  var stack = [];
  var maxDepth = 0;
  var minDepth = Infinity;

  stack.push({ depth: maxDepth, node: root });

  while (stack.length > 0) {
    var { depth, node } = stack.pop();

    if (isLeaf(node)) {
      depths.add(depth);

      if (depths.size > 2) return false; 

      maxDepth = Math.max(maxDepth, depth);
      minDepth = Math.min(minDepth, depth);

      if (depths.size === 2 && isTooDeep(maxDepth, minDepth)) return false;
    }

    if (node.right) {
      stack.push({ depth: depth + 1, node: node.right });
    }

    if (node.left) {
      stack.push({ depth: depth + 1, node: node.left });
    }
  }

  return true;
}


function assertIsBalancedIsTrue() {
  var bst = new BinaryTreeNode(1);
  bst.insertLeft(0);
  bst.insertRight(2);

  return isBalanced(bst);
}

function assertIsBalancedIsFalse() {
  var root = new BinaryTreeNode(10);

  root.insertLeft(1);   // depth
  root.insertRight(20);

  root.right.insertLeft(15);
  root.right.insertRight(30); // depth

  root.right.left.insertLeft(11) // depth

  return isBalanced(root);
}

function assertIsBalancedEdge1() {
  var root = new BinaryTreeNode(10);

  root.insertLeft(5);
  root.insertRight(15); 

  root.right.insertLeft(11);
  root.right.insertRight(20);

  root.right.right.insertRight(30);
  root.right.right.right.insertLeft(25);

    //    10
    // 5     15
    //     14  20
    //           30
    //         25

  return isBalanced(root);
}

// function assertIsBalancedEdge1() {
//   var root = new BinaryTreeNode(10);


//          10
//     5          15
//   4   6      12  25
//            11


//   return isBalanced(root);
// }


console.log( "Actual:", assertIsBalancedIsTrue(), "Expected:", true );
console.log( "Actual:", assertIsBalancedIsFalse(), "Expected:", false );
console.log( "Actual:", assertIsBalancedEdge1(), "Expected:", false );

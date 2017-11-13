


class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  add(val) {
    this.next = new ListNode(val);
    return this.next;
  }
}

var node1 = new ListNode(1);
var node2 = node1.add(2);
var node3 = node2.add(3);
var node4 = node3.add(4);
node4.next = node1; // cycle

// console.log( containsCycle(node1) );
console.log( hasCycle(node1) );

// ********************

function containsCycle(root) {
  var current = root;

  while (current) {
    if (current.visited) {
      return true;
    }

    current.visited = true;
    current = current.next;
  }

  return false;
}

function hasCycle(root) {
  var counter = 0;
  var fast = root.next;
  var slow = root;

  while (true) {
    counter += 1;

    if (!fast) return false;
    if (!fast.next) return false;
    if (fast === slow) return true;

    fast = fast.next;

    if (counter % 2 === 0) slow = slow.next;
  }
}
const { LinkedList, ListNode } = require('../linked-list');

test('traverse works', () => {
  let called = 0;

  const list = new LinkedList();

  list.append(1);
  list.append(2);
  list.append(3);

  list.traverse(() => { called++ });

  expect(called).toBe(3);
});

test('remove works', () => {
  let called = 0;

  const list = new LinkedList();

  const n1 = list.append(1);
  const nodeToDelete = list.append(2);
  const n3 = list.append(3);

  const deletedNode = list.remove(nodeToDelete);

  expect(deletedNode).toEqual(nodeToDelete);
  expect(n1.next).toEqual(n3);
});

test('remove head works', () => {
  let called = 0;

  const list = new LinkedList();

  const n1 = list.append(1);

  const deletedNode = list.remove(n1);

  expect(deletedNode).toEqual(n1);
  expect(list.head).toBeNull();
});

test('insertAt works', () => {
  let called = 0;

  const list = new LinkedList();

  const n1 = list.append(1);
  const n2 = list.append(2);
  const n3 = list.append(3);

  const newNode = list.insertAt(n2, 10);

  expect(n2.next).toEqual(newNode);
  expect(newNode.next).toEqual(n3);
});

test('addNext works', () => {
  const node = new ListNode(1);

  expect(node.addNext(2)).toEqual(new ListNode(2));
});

test('do the loop', () => {
  // Search for a value by looping through the list and
  // remembering the last item. When you find the value, the loop.
  // Make sure to check that a last item exists! If
  // it doesn't, you're at the head.

  const start = new ListNode(1);

  start.addNext(2).addNext(3).addNext(4).addNext(5);

  let current = start;
  let last = null;
  let found = false;

  while (current) {
    if (current.value === 1) {
      found = true;
      current = null;
      last = null;
    }
    else {
      last = current;
      current = current.next;
    }
  }

  expect(found).toBe(true);

});

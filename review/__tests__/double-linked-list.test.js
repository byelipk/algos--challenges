const { DoubleLinkedList, Node } = require('../double-linked-list');

test('append works', () => {
  const list = new DoubleLinkedList();

  const n1 = list.append(1);
  const n2 = list.append(2);
  const n3 = list.append(3);

  expect(list.head).toEqual(n1);
  expect(list.head.next).toEqual(n2);
  expect(list.head.next.next).toEqual(n3);
});

test('traverse works', () => {
  let called = 0;

  const list = new DoubleLinkedList();

  const n1 = list.append(1);
  const n2 = list.append(2);
  const n3 = list.append(3);

  list.traverse(function callback(node) {
    called++;
  });

  expect(called).toBe(3);
});

test('removing node in middle of list works', () => {
  const list = new DoubleLinkedList();

  const n1 = list.append(1);
  const n2 = list.append(2);
  const n3 = list.append(3);

  list.remove(n2);

  expect(list.head.next).toBe(n3);
});

test('removing head of list works', () => {
  const list = new DoubleLinkedList();

  const n1 = list.append(1);
  const n2 = list.append(2);
  const n3 = list.append(3);

  list.remove(n1);

  expect(list.head).toBe(n2);
});

test('removing last node in list works', () => {
  const list = new DoubleLinkedList();

  const n1 = list.append(1);
  const n2 = list.append(2);
  const n3 = list.append(3);

  list.remove(n3);

  expect(n2.next).toBe(null);
});

test('inserting node at head works', () => {
  const list = new DoubleLinkedList();

  const n1 = list.append(1);
  const n2 = list.append(2);
  const n3 = list.append(3);

  const n4 = list.insertAt(list.head, 10);

  expect(list.head.next).toEqual(n4);
  expect(n4.prev).toEqual(list.head);
  expect(n4.next).toEqual(n2);
});

test('inserting node in middle of list works', () => {
  const list = new DoubleLinkedList();

  const n1 = list.append(1);
  const n2 = list.append(2);
  const n3 = list.append(3);

  const n4 = list.insertAt(n2, 10);

  expect(n2.next).toEqual(n4);
  expect(n3.prev).toEqual(n4);
  expect(n4.next).toEqual(n3);
  expect(n4.prev).toEqual(n2);
});

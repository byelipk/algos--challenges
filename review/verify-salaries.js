const salaries = [
  { user: "blah1", salary: 210 },
  { user: "blah2", salary: 220 },
  { user: "blah3", salary: 220 },
  { user: "blah4", salary: 230 },
  { user: "blah5", salary: 240 },
  { user: "blah6", salary: 250 },
  { user: "blah7", salary: 260 },
  { user: "blah8", salary: 280 },
  { user: "bla91", salary: 350 },
  { user: "blah23", salary: 380 },
  { user: "blah11", salary: 400 },
  { user: "blah32", salary: 450 },
  { user: "blah54", salary: 500 },
  { user: "blah75", salary: 520 },
  { user: "blah90", salary: 1000 }
];

const isSymmetric(tree) {
  const queue = [];

  queue.push(tree.left);
  queue.push(tree.right);

  while (queue.length > 0) {
    const left = queue.shift();
    const right = queue.shift();

    if (left.value.salary !== right.value.salarly) {
      return false;
    }

    if (left.left) { queue.push(left.left); }
    if (right.right) { queue.push(right.right); }
    if (right.left) { queue.push(right.left); }
    if (left.right) { queue.push(left.right); }
  }

  return true;
}

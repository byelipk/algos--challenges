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

function bs(sorted, salary) {
  let floor = 0;
  let ceiling = sorted.length;

  while (floor < ceiling) {
    const midpoint = Math.floor((floor + ceiling) / 2);
    const employee = sorted[midpoint];

    if (salary === employee.salary) {
      return employee;
    }
    else if (salary < employee.salary) {
      ceiling = midpoint;
    }
    else {
      floor = midpoint;
    }
  }
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function buildTree(dataset, lo, hi) {
  if (hi < lo) return null;

  const mid = Math.floor((lo + hi) / 2);
  const node = new BST(dataset[mid]);

  node.left = buildTree(dataset, lo, mid-1);
  node.right = buildTree(dataset, mid+1, hi);

  return node;
}

function dfs(node) {
  if (node) {
    dfs(node.left);
    console.log(node.value);
    dfs(node.right);
  }
}

function bfs(node) {
  if (node) {
    bfs(node.right);
    console.log(node.value);
    bfs(node.left);
  }
}

class SelfOrganizingBST {
  constructor(list) {
    this.buildTree = this.buildTree.bind(this);

    this.list = list.sort((a,b) => a - b);
    this.tree = this.buildTree(this.list, 0, this.list.length - 1);
  }

  buildTree(list, lo, hi) {
    if (hi < lo) return null;

    const mid = Math.floor((hi + lo) / 2);
    const node = new BST(list[mid]);

    node.left = this.buildTree(list, lo, mid - 1);
    node.right = this.buildTree(list, mid + 1, hi);

    return node;
  }

  append(val) {
    this.list.push(val);
    this.list.sort((a,b) => a - b);
    this.tree = this.buildTree(this.list, 0, this.list.length - 1);
    return this.tree;
  }
}


// console.log(bs(salaries, 210));
// console.log(bs(salaries, 1000));

// console.log(buildTree([1]));
// const tree = buildTree(salaries, 0, salaries.length - 1);

// dfs(tree);
// console.log()
// bfs(tree);

const selfOrganizingTree = new SelfOrganizingBST([3,1,2]);

selfOrganizingTree.append(5);

console.log(selfOrganizingTree.tree);

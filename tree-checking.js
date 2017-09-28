class Node {
	constructor(value) {
		this.value = value;
		this.children = [];
	}
}

// Space complexity: O(n)
// Time complexity: O(n log n)
function isBinary(root) {
	return isBinaryDFS(root, node => node.children.length <= 2);
	// return isBinaryBFS(root, (node) => node.children.length <= 2);
}

function isBinaryBFS(node, callback) {
	const queue = [];

	queue.push(node);

	while (queue.length > 0) {
		const curr = queue.shift();

		if (!callback(curr)) return false;

		if (curr.children[0]) {
			queue.push(curr.children[0]);
		}

		if (curr.children[1]) {
			queue.push(curr.children[1]);
		}
	}

	return true;
}

function isBinaryDFS(node, callback) {
	const stack = [];

	stack.push(node);

	while (stack.length > 0) {
		const curr = stack.pop();

		if (!callback(curr)) return false;

		if (curr.children[1]) {
			stack.push(curr.children[1]);
		}

		if (curr.children[0]) {
			stack.push(curr.children[0]);
		}
	}

	return true;
}

// 1. Keep track of all the leaf depths.
// 2. If there are more than 2 depths, the tree is unbalanced
// 3. If there are two depths whose difference is greater than 1,
//    the tree is unbalanced.
function isBalanced(root) {
	const stack = [];  // O(k) where k is max depth
	const depths = []; // O(1) where the max size is 3

	let maxDepth = 0;

	stack.push({ node: root, depth: 0 });

  // O(n) time complexity
  // O(k) space complexity
	while (stack.length > 0) {
		const { node, depth } = stack.pop();

		if (node.children.length > 2) {
			throw new Error("NOT A BINARY TREE!");
		}

		maxDepth = Math.max(maxDepth, depth);

		// We found a leaf
		if (node.children.length === 0) {
			if (depths.indexOf(depth) < 0) {
        
				depths.push(depth);

				if (depths.length > 2) return false;

				if (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
					return false;
			}
		} else {
			if (node.children[1]) {
				stack.push({ node: node.children[1], depth: depth + 1 });
			}

			if (node.children[0]) {
				stack.push({ node: node.children[0], depth: depth + 1 });
			}
		}
	}

	return true;
}

module.exports = { Node, isBinary, isBalanced };

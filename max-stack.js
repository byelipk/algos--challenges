class Stack {
  constructor() {
    this.items = [];
  }

  push(val) {
    return this.items.push(val);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

class MaxStack {
  constructor() {
    this.max = new Stack();
    this.stack = new Stack();
  }

  push(val) {
    if (this.max.size() === 0 || val > this.getMax()) {
      this.max.push(val);
    }

    return this.stack.push(val);
  }

  pop() {
    var val = this.stack.pop();

    if (val === this.getMax()) {
      this.max.pop();
    }

    return val;
  }

  getMax() {
    return this.max.peek();
  }

}

var maxStack = new MaxStack();

maxStack.push(1);
maxStack.push(10);
maxStack.push(4);
maxStack.pop();
maxStack.pop();
maxStack.pop();

console.log(maxStack.getMax());
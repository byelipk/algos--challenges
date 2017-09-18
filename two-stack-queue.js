class TwoStackQueue {

  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(value) {
    this.inStack.push(value);
  }

  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }

      if (this.outStack.length === 0) {
        throw new Error("Queue is empty. 😤");
      }
    }
    return this.outStack.pop();
  }
}

module.exports = TwoStackQueue;

/**

  Talk to me about time complexity of this queue.

  What are the time and space complexity for "enqueue"?

  O(1) time and O(1) space.

  What about dequeue?

  Well, that depends. 😀

  A dequeue on a non-empty outStack is O(1). A dequeue on a non-empty
  outStack is a little more tricky because we have to move all the
  items from inStack to outStack.

  Another way to think about it is that by looking at the lifespan
  of an item in the queue. An item first gets pushed onto inStack,
  then popped from inStack and pushed onto outStack. Finally it is
  popped from outStack. All these operations are O(1) time. So, for
  "m" enqueues, we can say the time complexity of dequeue is O(m).



*/

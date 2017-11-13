class Queue {
  constructor() {
    this.count = 0;
    this.in = [];
    this.out = [];
  }

  // add new element to end of queue
  enqueue(val) {
    this.in.push(val);
    return this.count += 1;
  }

  // remove element from front of queue
  dequeue() {
    while (this.in.length) {
      this.out.push(this.in.pop());
    }

    var result = this.out.pop();
    if (result) {
      this.count -= 1;
    }

    while (this.out.length) {
      this.in.push(this.out.pop());
    }

    return result;
  }
}


var q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

q.dequeue();
q.dequeue();
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.dequeue();

console.log( q.dequeue() );

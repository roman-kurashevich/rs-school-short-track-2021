/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
    this.top = 0;
  }

  push(element) {
    this.arr[this.top] = element;
    this.top += 1;
    // throw new Error('Not implemented');
  }

  pop() {
    this.top -= 1;
    return this.arr.pop();
    // throw new Error('Not implemented');
  }

  peek() {
    return this.arr[this.top - 1];
    // throw new Error('Not implemented');
  }
}

module.exports = Stack;

class Stack
{
    items = [];

    constructor() {
        this.items = [];
    }
    // pushing an element into stack
    push(element) {
        this.items.push(element);
    }
    // popping an element from stack
    pop(element) {
        this.items.pop(element);
    }
    // Peeking an element from stack
    peek() {
        return this.items[this.items.length -1];
    }
    // Checking if our stack is empty
    isEmpty() {
        return this.items.length == 0;
    }
    // Checking the stack length
    size() {
        return this.items.length;
    }
}

stack = new Stack();

stack.push(1);
stack.push(2);
console.log(
    `All Elements [${stack.items.toString()}]
    Size: ${stack.size()}
    Top Element: ${stack.peek()}
`);
stack.push(2234);
stack.push(1552);
stack.pop();
console.log(
    `All Elements [${stack.items.toString()}]
    Size: ${stack.size()}
    Top Element: ${stack.peek()}
`);

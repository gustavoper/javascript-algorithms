class Stack
{
    constructor() {
        this.items = {};
        this.count = 0;
    }
    // pushing an element into stack
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    // popping an element from stack
    pop() {
        if (this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    // Peeking an element from stack
    peek() {
        if (this.isEmpty()){
            return undefined;
        }
        return this.items[this.count -1];
    }
    // Checking if our stack is empty
    isEmpty() {
        return this.count === 0;
    }
    //
    size() {
        return this.count;
    }
    toString() {
        if (this.isEmpty()){
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}


const stack = new Stack();
stack.push(3);
stack.push(7);
stack.pop();
console.log(
    `All Elements [${stack.toString()}]
    Size: ${stack.size()}
    Top Element: ${stack.peek()}
`);
stack.push(312);
console.log(
    `All Elements [${stack.toString()}]
    Size: ${stack.size()}
    Top Element: ${stack.peek()}
`);
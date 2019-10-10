const Queue = require("./queue");


const qu = new Queue();

qu.enqueue("John");
qu.enqueue("Mary");
qu.enqueue("John");



console.log(`All Elements: ${qu.toString()} 
             Size: ${qu.size()}
`);
qu.dequeue();

console.log(`All Elements After 1 Deque: ${qu.toString()} 
             Size: ${qu.size()}
`);

qu.dequeue();

console.log(`All Elements After 1 Deque: ${qu.toString()} 
             Size: ${qu.size()}
`);
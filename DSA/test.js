import { Node } from "./node.js";
import { Stack } from "./Stack.js";
import { Queue } from "./Queue.js";

console.log("------Node Test------");
const newNode = new Node("Jimmy");
console.log(newNode.getValue());
console.log(newNode.next);

const sampleStack = new Stack();
const sampleStack2 = new Stack();
const sampleQ = new Queue();

console.log("------Stack Tests------");
sampleStack.push(10);
sampleStack.push(20);
sampleStack2.pushAll([0, 1, 2, 3]);

console.log(sampleStack.peek());
console.log(sampleStack2.peek());

console.log(sampleStack2.contains(4));
console.log(sampleStack2.contains(3));

console.log("------Queue Tests------");
console.log(sampleQ.isEmpty());
sampleQ.enqueue(0);
console.log(sampleQ.isEmpty());
sampleQ.enqueue(1);
sampleQ.enqueue(2);

console.log(sampleQ.printAll());
console.log(sampleQ.peek(), sampleQ.dequeue(), sampleQ.peek());
console.log(sampleQ.contains(1));
console.log(sampleQ.printAll());

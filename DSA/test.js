import { Node } from "./node.js";
import { Stack } from "./Stack.js";

const newNode = new Node("Jimmy");
console.log(newNode.getValue());

const sample = new Stack();
const sample2 = new Stack();
sample2.pushAll([0, 1, 2, 3]);

sample.push(10);
sample.push(20);

console.log(sample.peek());
console.log(sample2.peek());

console.log(sample2.contains(4));
console.log(sample2.contains(3));

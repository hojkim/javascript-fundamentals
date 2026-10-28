import { Node } from "./node.js";

// Stack class
export class Stack {
   // fields
   #head;
   #size;

   // constructor
   constructor() {
      this.#head = null;
      this.#size = 0;
   }

   // methods
   // creates and adds node with passed value into stack
   push(value) {
      const newNode = new Node(value);
      newNode.next = this.#head;
      this.#head = newNode;
      this.#size++;
   }

   // adds passed node into stack
   pushNode(node) {
      node.next = this.#head;
      this.#head = node;
      this.#size++;
   }

   // adding multiple values from an array into stack
   pushAll(arr) {
      for (let i = 0; i < arr.length; i++) {
         this.push(arr[i]);
         this.peek();
      }
   }

   // removes the last node that was added to the stack and returns its value
   pop() {
      const removedNode = this.#head;
      this.#head = this.#head.next;
      this.#size--;
      return removedNode.getValue();
   }

   // returns the last node's value
   peek() {
      return this.#head.getValue();
   }

   // returns boolean for if the stack is empty
   isEmpty() {
      return this.#size === 0;
   }

   // returns boolean for if the passed value exists in the current stack of nodes
   contains(desiredValue) {
      let currentNode = this.#head;

      while (currentNode != null) {
         if (currentNode.getValue() === desiredValue) {
            return true;
         }
         currentNode = currentNode.next;
      }

      return false;
   }
}

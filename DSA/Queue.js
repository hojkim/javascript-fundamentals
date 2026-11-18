import { Node } from "./node.js";

/*
   1. size
   2. head
   3. constructor
   4. add() or offer() - adds node to end of queue
   5. poll() - removes first node in queue
   6. peek() - returns oldest node's value
   7. isEmpty() - returns boolean for size = 0
   8. contains(value) - returns boolean if inputted value is in queue
*/
export class Queue {
   // fields/properties
   #head;
   #tail;
   #size;

   constructor() {
      this.#head = null;
      this.#tail = null;
      this.#size = 0;
   }

   enqueue(value) {
      const newNode = new Node(value);
      if (this.#size === 0) {
         this.#head = newNode;
         this.#tail = newNode;
      } else {
         this.#tail.next = newNode;
         this.#tail = newNode;
      }
      this.#size++;
   }

   dequeue() {
      if (this.#size === 0) {
         return null;
      }

      const temp = this.#head;
      this.#head = temp.next;
      return temp.getValue();
   }

   peek() {
      return this.#head.getValue();
   }

   isEmpty() {
      return this.#size === 0;
   }

   contains(value) {
      if (this.#size === 0) {
         return false;
      }

      let curr = this.#head;
      while (curr !== null) {
         if (curr.getValue() === value) {
            return true;
         }
         curr = curr.next;
      }

      return false;
   }

   printAll() {
      const values = [];
      let curr = this.#head;
      while (curr !== null) {
         values.push(curr.getValue());
         curr = curr.next;
      }

      return values.join(", ");
   }
}

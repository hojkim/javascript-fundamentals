// Class for node element to be used in Stack and Queue classes
export class Node {
   // fields - private fields are prefixed with '#'
   #value;
   next;

   // constructor
   constructor(value) {
      this.#value = value;
      this.next = null;
   }

   // methods
   getValue() {
      return this.#value;
   }
}

var test = "monkey";
console.log(test);

var test = "no error";
console.log(test);

let var1 = "simple";
console.log(var1);

// Throws an error since re-declaration with 'let' and 'const' is not allowed.
// let var1 = "not simple";

if (true) {
   var name = "Ethan";
}
// Doesn't throw reference error because 'var' declarations are hoisted as globally scoped variables
console.log(name);

if (true) {
   let name2 = "Amanda";
}
// Throws reference error due to block scope of variable declared with 'let'
// console.log(name2);

// Closure function that keeps track of private counter and returns the count whenever the function is called
const createIncrementer = () => {
   let count = 0;
   return () => {
      count++;
      console.log(count);
   };
};

let increment = createIncrementer();
increment();
increment();

// Closure function that keeps track of assigned greeting message and returns string with the greeting and a passed name
const createGreeting = (greeting) => {
   return (name) => {
      console.log(`${greeting}, ${name}`);
   };
};

let hello = createGreeting("Hello");
hello("Abby");

createGreeting("Hi")("Mr. Bean");

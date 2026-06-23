// regular function declaration
function greet(name) {
   console.log(`Hello, ${name}!`);
}

greet("Bobby");

// By default, the return value of a function is 'undefined'
console.log(greet("Mary"));

// Can declare an anonymous function by assigning it to a variable
const sum = function (num1, num2) {
   return num1 + num2;
};

console.log(sum(52, 41));

// Default values can be assigned to parameters. They will update once a new value is inputted into the function
function greetings(name = "Ditto") {
   console.log(`Hello, ${name}!`);
}

greetings();
greetings("Munchlax");

// A version of the greetings function using arrow function syntax
// The parentheses are not required for single parameter functions
const greetingsV2 = (name) => {
   console.log(`Hello, ${name}!`);
};

// If the function only contains a single line of code, the curly braces can be removed from the syntax
const greetingsV3 = (name) => console.log(`Hello, ${name}!`);

greetingsV2("Benny");
greetingsV3("Benny");

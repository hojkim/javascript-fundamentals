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

let minIncomeForCondo = 70000;
let minIncomeForCar = 50000;

// Testing ternary conditional statements
const getMessage = (income) => {
   const message =
      income >= minIncomeForCondo && income > minIncomeForCar
         ? "You can afford a condo and a car"
         : income >= minIncomeForCar && income < minIncomeForCondo
           ? "You can afford a car, but not a condo"
           : "You can't afford neither a car nor condo";
   console.log(message);
};

getMessage(80000);
getMessage(50000);
getMessage(40000);

const confirmEnding = (str1, str2) => {
   const str2Length = str2.length;
   const str1End = str1.slice(str1.length - str2Length);
   if (str1End.toLowerCase() === str2.toLowerCase()) {
      return true;
   }
   return false;
};

console.log(confirmEnding("blender", "Ender"));
console.log(confirmEnding("butter rolls", "lols"));

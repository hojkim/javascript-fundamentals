const firstName = "Gerald";
const lastName = "Booker";
const legalName = `${firstName} ${lastName}`;
let age = 28;

function greeting(name, age) {
   return `Hello everyone, my name is ${legalName} and I am ${age} years old.`;
}

console.log(greeting(legalName, age));

// var is not used in new code due to bugs that occur as JS hoists the variable to the top of the function.
var number = 3;

// this returns false because JS uses floating point arithmetic, so the value of 0.1 + 0.2 is actually 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);

// this returns type object because it is an early JS bug that was never fixed
// null is its own data type, but due to this bug, the typeof operator returns 'object'
console.log(typeof null);

let firstName = "Gerald";
let lastName = "Booker";
const legalName = `${firstName} ${lastName}`;
console.log(`Hello everyone, my name is ${legalName}`);

// var is not used in new code due to bugs that occur as JS initializes the variable before any code in the function is executed.
var number = 3;

// this returns false because JS uses floating point arithmetic, so the value of 0.1 + 0.2 is actually 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);

// this returns type object because it is an early JS bug that was never fixed
// null is its own data type, but due to this bug, the typeof operator returns 'object'
console.log(typeof null);

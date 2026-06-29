// Since function declarations are hoisted, calling a console.log of the function before it appears in the document will work fine
console.log(sum(425, 992));
function sum(num1, num2) {
   return num1 + num2;
}

// Function expressions are not hoisted and will throw a ReferenceError if referenced before the declaration
// Since the function body only has one line, the curly braces and 'return' can be omitted
// console.log(sum2(572, 448));
const sum2 = (num1, num2) => num1 + num2;
console.log(sum2(17, 97));

const pemdas = (num1, num2, num3, num4) => {
   return (num1 * (num2 + num3)) / num4;
};

console.log(pemdas(2, 5, 4, 18));

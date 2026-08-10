// Closures
function createDecrementer() {
   let count = 100;
   return function () {
      count--;
      console.log(count);
   };
}

let decrementer = createDecrementer();
for (let i = 0; i < 5; i++) {
   console.log(decrementer());
}

function multiply(x) {
   return function (y) {
      console.log(x * y);
   };
}

let multiply10 = multiply(10);
console.log(multiply10(4));
console.log(multiply10(200));

// This function returns the first element in a passed array that passes the passed test function
// If none of the elements in the array pass the test function, it returns undefined
const findElement = (arr, func) => {
   for (const num of arr) {
      if (func(num)) {
         return num;
      }
   }
   return undefined;
};

console.log(
   findElement([1, 3, 5, 8, 9, 10], function (num) {
      return num % 2 === 0;
   }),
);
console.log(
   findElement(["hello", "world", "javascript"], function (str) {
      return str.length > 5;
   }),
);
console.log(
   findElement(["cat", "dog", "bird"], function (str) {
      return str.length > 10;
   }),
);

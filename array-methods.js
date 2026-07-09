// map() method creates a new array after applying a callback function to each element in the original array
// callback function can take up to 3 arguments: the current element, the index of that element, and the array that the map method is called on
// array.map((element, index, array) => { });
const numbers = [1, 17, 49, 22, 70, 4, 3];
const quadrupled = numbers.map((num) => num * 4);
console.log(quadrupled);
const detailedNumbers = numbers.map((element, index, array) => {
   console.log(`Element: ${element}`);
   console.log(`Index: ${index}`);
   console.log(`Array: ${array}`);
   return element;
});
console.log(detailedNumbers);

// filter() method creates a new array with elements from the original array that pass a given test
// callback function takes the same 3 arguments as map method
// array.filter((element, index, array) => { });
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
const doubleEvens = numbers.filter(
   (num, index) => num % 2 === 0 && index % 2 === 0,
);
console.log(doubleEvens);

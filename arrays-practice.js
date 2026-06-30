// declaring an array with a const variable still makes it mutable, but cannot be reassigned a new array list
const fruits = ["apple", "orange", "banana"];
console.log(fruits.push("melon", "lychee", "mango"));
console.log(fruits);

const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

const newLength = fruits.unshift("kiwi", "guava", "blueberry");
console.log(newLength);
console.log(fruits);

const firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

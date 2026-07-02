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
// outputs ['guava', 'blueberry', 'apple', 'orange', 'banana', 'melon', 'lychee']
console.log(fruits);

// array destructuring
// discoveries: rest element must be the last element
let [first, , third, ...remainder] = fruits;
console.log(first);
console.log(third);
console.log(remainder);

// reversing a string
let name = "hojun";
let charName = name.split("");
console.log(charName);
charName.reverse();
console.log(charName);
let reversedName = charName.join("");
console.log(reversedName);

// reversing a string in one line of code
let reversedName2 = name.split("").reverse().join("");
console.log(reversedName2);

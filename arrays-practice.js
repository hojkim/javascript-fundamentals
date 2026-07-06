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

// indexOf() method
// array.indexOf(element, startingIndex)
// discoveries: case sensitive and if the value doesn't exist, returns -1
const bananaIndex = fruits.indexOf("banana");
const raspberryIndex = fruits.indexOf("raspberry");
console.log(bananaIndex);
console.log(raspberryIndex);

// shallow copies using concat(), slice(), and spread operator
// discoveries: shallow copies are not exact copies of the original array, equality check returns false
const copyFruits1 = [].concat(fruits);
const copyFruits2 = fruits.slice();
const copyFruits3 = [...fruits];

console.log(copyFruits1);
console.log(copyFruits2);
console.log(copyFruits3);
console.log(
   copyFruits1 === fruits || copyFruits2 === fruits || copyFruits3 === fruits,
);

// splice() method for adding and removing elements in middle of array
// array.splice(startingIndex, numItemsToRemove, addItem1, addItem2)
// discoveries: mutates original array
const removed = copyFruits1.splice(2, 2, "kumquat", "pineapple", "mango");
console.log(removed);
console.log(copyFruits1);

// includes() method
// array.includes(element, startingIndex)
// discoveries: case sensitive and uses strict equality comparison
console.log(fruits.includes("banana"));
console.log(fruits.includes("watermelon"));

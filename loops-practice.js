for (let i = 0; i < 10; i++) {
   console.log(i + 1);
}

for (let i = 1; i <= 64; i *= 2) {
   console.log(i);
}

const people = [
   { name: "Derrick", age: 28 },
   { name: "Justin", age: 27 },
   { name: "Ramy", age: 30 },
   { name: "Erica", age: 31 },
   { name: "Monica", age: 26 },
   { name: "Phoebe", age: 29 },
];

// for...of loop - useful for looping over values of iterables (strings and arrays)
for (const person of people) {
   console.log(`${person.name} is ${person.age} years old.`);
}

const name = people[3].name;
console.log(name);
for (const char of name) {
   console.log(char.toUpperCase());
}

const people = [
   { name: "Justine", age: 32, city: "Seattle" },
   { name: "Kyle", age: 24, city: "Bellevue" },
   { name: "Stella", age: 28, city: "Renton" },
   { name: "Peter", age: 33, city: "Renton" },
   { name: "Fred", age: 25, city: "Bellingham" },
];

const over25 = people.filter((person) => person.age > 25);
console.log(over25);

const names = people.map((person) => person.name);
console.log(names);

const firstRentonResident = people.find(
   (person) => person.city.toLowerCase() === "renton",
);
console.log(firstRentonResident);

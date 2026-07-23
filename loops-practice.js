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

const address = {
   houseNumber: 9204,
   street: "McKinney Ave NE",
   city: "Bennyville",
   state: "Arkansas",
   zip: 71620,
};

// for...in loop - useful for looping over objects
let fullAddress = "";
for (const prop in address) {
   fullAddress = fullAddress.concat(" ", address[prop]);
}
console.log(fullAddress.trimStart());

const person = {
   name: "Nuj",
   age: 28,
   address: address,
};

// object validator - checks arrays and null values since both are considered objects using typeof
function isObject(obj) {
   return typeof obj === "object" && !Array.isArray(obj) && typeof obj !== null;
}

for (const prop in person) {
   if (isObject(person[prop])) {
      for (const nestedProp in person[prop]) {
         console.log(person[prop][nestedProp]);
      }
   } else {
      console.log(person[prop]);
   }
}

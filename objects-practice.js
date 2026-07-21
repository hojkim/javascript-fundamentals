const person = {
   name: "Hojun",
   age: 28,
   nickname: "Nuj",
   hairColor: "black",
   "native descent": "South Korean",
   contact: {
      email: "junjunjun@email.com",
      phone: {
         home: "123-456-7890",
         work: "098-765-4321",
      },
   },
   addresses: [
      { type: "work", street: "100 Main St", city: "Montyville" },
      { type: "home", street: "999 Densil Ave", city: "Northshore" },
   ],
   greeting: function () {
      return `Hello, my name is ${this.name} and I am ${this["native descent"]}.`;
   },
   workPhone() {
      return `My work phone number is ${this.contact.phone.work}.`;
   },
};

console.log(person.nickname);
console.log(person["native descent"]);
console.log(person.contact.phone.work);
console.log(person["contact"]["phone"]["home"]);
console.log(person.addresses[0].city);

// delete operator deletes properties from an object
delete person.hairColor;
console.log(person.hairColor);

// Testing different options to check if an object has a property
console.log(Object.hasOwn(person, "name"));
console.log(Object.hasOwn(person, "hairColor"));
console.log(Object.hasOwn(person, "naMe"));
console.log("name" in person);
console.log(person.name !== undefined);
console.log(person.hairColor !== undefined);
console.log(person.greeting());
console.log(person.workPhone());

const fruit = {
   name: "Alphonso Mango",
   isYummy: true,
   isSmall: false,
   country: "India",
};

// JSON.stringify() practice, takes in 3 parameters: object, replacer, and spacer. the latter 2 are not commonly used
const stringifiedFruit = JSON.stringify(fruit);
console.log(stringifiedFruit);
console.log(typeof stringifiedFruit);
console.log(JSON.stringify(fruit, ["name", "country"]));
console.log(JSON.stringify(fruit, null, 4));

// JSON.parse() practice
const fruitObj = JSON.parse(stringifiedFruit);
console.log(fruitObj);
console.log(typeof fruitObj);
console.log(JSON.parse("{}"));

// Object destructuring
const { name: fruitName, country: originCountry, color = "Yellow" } = fruit;
console.log(`Name: ${fruitName}\nCountry: ${originCountry}\nColor: ${color}`);

const {
   contact: { email: personalEmail },
} = person;
console.log(personalEmail);

const {
   contact: {
      phone: { home: homePhoneNumber },
   },
} = person;
console.log(homePhoneNumber);

// Nested object destructuring, accessing object properties that are nested in an array inside an object
const {
   addresses: [{ city: cityName, type }, { city: cityName2 }],
} = person;
console.log(`My ${type} address is in ${cityName}.`);
console.log(`My personal address is in ${cityName2}.`);

// Shorthand notation
let bugName = "June";
let bugAge = "2 weeks";

let bug = { bugName, bugAge };
console.log(bug);

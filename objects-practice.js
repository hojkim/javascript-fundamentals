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

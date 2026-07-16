const tiger = {
   species: "Tiger",
   age: 7,
   isEndangered: true,
};

const elephant = {
   species: "Elephant",
   age: 40,
   isEndangered: true,
};

const raccoon = {
   species: "Raccoon",
   age: 2,
   isEndangered: false,
};

const getSpecies = (animal) => {
   return animal.species;
};

const getAge = (animal) => {
   return animal.age;
};

console.log(getSpecies(raccoon));
console.log(getAge(raccoon));

// Adds a new habitat property to animal object and is assigned the value in the 2nd parameter
const addHabitat = (animal, habitat) => {
   animal.habitat = habitat;
   return animal;
};

console.log(addHabitat(tiger, "Rainforest"));
console.log(addHabitat(elephant, "Savanna"));

// Updates the age property of the animal object with the age provided in the 2nd parameter
const updateAge = (animal, newAge) => {
   animal.age = newAge;
   return animal;
};

console.log(updateAge(tiger, 8));

// Removes property from animal object using delete operator
const removeEndangeredStatus = (animal) => {
   delete animal.isEndangered;
   return animal;
};

console.log(removeEndangeredStatus(elephant));

const hasHabitat = (animal) => {
   return animal.hasOwnProperty("habitat");
};

const hasHabitatV2 = (animal) => {
   return Object.hasOwn(animal, "habitat");
};

console.log(hasHabitat(tiger));
console.log(hasHabitat(raccoon));
console.log(hasHabitatV2(tiger));
console.log(hasHabitatV2(raccoon));

const getProperty = (animal, propertyName) => {
   return animal[propertyName];
};

console.log(getProperty(tiger, "habitat"));
console.log(getProperty(elephant, "age"));
console.log(getProperty(raccoon, "isEndangered"));

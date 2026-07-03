const lunches = [];
const addLunchToEnd = (arr, str) => {
   arr.push(str);
   console.log(`${str} added to the end of the lunch menu.`);
   return arr;
};

const addLunchToStart = (arr, str) => {
   arr.unshift(str);
   console.log(`${str} added to the start of the lunch menu.`);
   return arr;
};

const removeLastLunch = (arr) => {
   if (arr.length === 0) {
      console.log("No lunches to remove.");
      return arr;
   }
   const lastItem = arr.pop();
   console.log(`${lastItem} removed from the end of the lunch menu.`);
   return arr;
};

const removeFirstLunch = (arr) => {
   if (arr.length === 0) {
      console.log("No lunches to remove.");
      return arr;
   }
   const firstItem = arr.shift();
   console.log(`${firstItem} removed from the start of the lunch menu.`);
   return arr;
};

const getRandomLunch = (arr) => {
   if (arr.length === 0) {
      return console.log("No lunches available.");
   }
   // Learned to use Math.floor() over Math.round() when creating a range of indices for an array to avoid possible return value of 'undefined'
   const randomIndex = Math.floor(Math.random() * arr.length);
   console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
};

const showLunchMenu = (arr) => {
   if (arr.length === 0) {
      return console.log("The menu is empty.");
   }
   const lunchMenu = arr.join(", ");
   console.log(`Menu items: ${lunchMenu}`);
};

// Test code
addLunchToEnd(lunches, "Pepperoni Pizza");
addLunchToEnd(lunches, "Fried Chicken Sandwich");
console.log(lunches);
addLunchToStart(lunches, "Mashed Potatoes");
addLunchToStart(lunches, "French Fries");
console.log(lunches);
getRandomLunch(lunches);
getRandomLunch(lunches);
removeLastLunch(lunches);
console.log(lunches);
removeFirstLunch(lunches);
console.log(lunches);
addLunchToEnd(lunches, "Paneer 65");
addLunchToStart(lunches, "Gunpowder Dosa");
showLunchMenu(lunches);

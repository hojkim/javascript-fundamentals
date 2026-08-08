// Using for loop to reverse string
const reverseString = (string) => {
   const chars = [...string];
   const reversed = [];
   for (let i = 0; i < chars.length; i++) {
      reversed[i] = chars[chars.length - i - 1];
   }
   return reversed.join("");
};

// Using reverse() method on character array
const reverseString = (string) => {
   const chars = [...string];
   chars.reverse();
   return chars.join("");
   // return [...string].reverse().join(""); <-- one line return
};

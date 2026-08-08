// Requirement for the input is that it has to be an array of number arrays
const largestOfAll = (numArr) => {
   if (numArr.length === 0 || !Array.isArray(numArr)) {
      return null;
   }

   let maxArr = [];
   for (let i = 0; i < numArr.length; i++) {
      let currentMax = numArr[i][0];
      for (let j = 1; j < numArr[i].length; j++) {
         if (numArr[i][j] > currentMax) {
            currentMax = numArr[i][j];
         }
      }
      maxArr[i] = currentMax;
   }

   return maxArr;
};

console.log(
   largestOfAll([
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1],
   ]),
);
console.log(
   largestOfAll([
      [17, 23, 25, 12],
      [25, 7, 34, 48],
      [4, -10, 18, 21],
      [-72, -3, -17, -10],
   ]),
);

function createDecrementer() {
   let count = 100;
   return function () {
      count--;
      console.log(count);
   };
}

let decrementer = createDecrementer();
for (let i = 0; i < 5; i++) {
   console.log(decrementer());
}

function multiply(x) {
   return function (y) {
      console.log(x * y);
   };
}

let multiply10 = multiply(10);
console.log(multiply10(4));
console.log(multiply10(200));

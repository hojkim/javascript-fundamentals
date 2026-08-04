const jun = {
   name: "Jun",
   age: 28,
   city: "Kirkland",
   state: "Washington",
   skills: ["JavaScript", "HTML", "CSS", "Java", "Python", "SQL"],
   currentGoal: { role: "Fullstack Developer", targetDate: "9/30/2027" },
};

for (let i = 0; i < jun.skills.length; i++) {
   console.log(jun.skills[i]);
}

for (const skill of jun.skills) {
   console.log(skill);
}

for (const prop in jun) {
   if (typeof jun[prop] === "object" && !Array.isArray(jun[prop])) {
      for (const subProp in jun[prop]) {
         console.log(
            `Key: ${prop}, Sub Key: ${subProp}, Value: ${jun[prop][subProp]}`,
         );
      }
   } else {
      console.log(`Key: ${prop}, Value: ${jun[prop]}`);
   }
}

let counter = 10;
while (counter > 0) {
   console.log(counter--);
}

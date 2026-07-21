const jun = {
   name: "Jun",
   age: 28,
   city: "Kirkland",
   state: "Washington",
   skills: ["JavaScript", "HTML", "CSS", "Java", "Python", "SQL"],
   currentGoal: { role: "Fullstack Developer", targetDate: "9/30/2027" },
};

console.log(`My name is ${jun.name}.`);
console.log(`I live in ${jun["city"]}, ${jun["state"]}.`);
console.log(`I am currently familiarizing myself with ${jun.skills[0]}.`);
console.log(`My current goal is to become a ${jun.currentGoal.role}.`);

jun.isJobSeeking = true;
console.log(jun);

console.log(jun["city"]);
jun["city"] = "Bothell";
console.log(jun.city);

console.log(jun.currentGoal["targetDate"]);
jun.currentGoal["targetDate"] = "8/15/2027";
console.log(jun.currentGoal["targetDate"]);

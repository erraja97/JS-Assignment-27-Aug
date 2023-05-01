/* Question 12: Use the Date object to do the following activities
- What is the year today?
- What is the month today as a number?
- What is the date today?
- What is the day today as a number?
- What is the hours now?
- What is the minutes now?
- Find out the numbers of seconds elapsed from January 1, 1970 to now. */

let now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());


//Find out the numbers of seconds elapsed from January 1, 1970 to November 8, 2022

let date1 = new Date("Jan 1, 1970");
let date2 = new Date("8 Nov, 2022");
let result = Math.abs(date1.getTime() - date2.getTime()) / 1000;
console.log(result);
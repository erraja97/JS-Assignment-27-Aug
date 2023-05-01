//Question 17: Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const readline = require("readline");

// Create a readline interface for getting user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for their age
rl.question("Enter your age: ", function (ageStr) {
  // Convert the input to a number
  const age = parseInt(ageStr);

  // Check if the user is old enough to drive
  if (age >= 18) {
    console.log("You are old enough to drive.");
  } else {
    const yearsToWait = 18 - age;
    console.log(
      `Sorry, you are not old enough to drive. Please wait ${yearsToWait} year(s) until you are 18.`
    );
  }

  // Close the readline interface
  rl.close();
});

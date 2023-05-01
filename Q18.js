//Question 18: Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

const readline = require("readline");

// Create a readline interface for getting user input
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Ask user for prompt
r1.question("Enter the variable: ", (input_num) => {
  //convert string to int
  const num = parseInt(input_num);

  // Check if the number is even
  if (num % 2 === 0) {
    console.log(`${num} is even.`);
  } else {
    console.log(`${num} is odd.`);
  }

  // Close the readline interface
  r1.close();
});

//Question 21: Write a program which tells the number of days in a month.

const readline = require("readline");

// Create a readline interface for getting user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for the month and year
rl.question("Enter a month (1-12): ", function (monthStr) {
  rl.question("Enter a year: ", function (yearStr) {
    // Convert the input to numbers
    const month = parseInt(monthStr);
    const year = parseInt(yearStr);

    // Determine the number of days in the month
    let numDays;
    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
      numDays = 31;
    } else if ([4, 6, 9, 11].includes(month)) {
      numDays = 30;
    } else if (month === 2) {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        numDays = 29;
      } else {
        numDays = 28;
      }
    } else {
      console.log("Invalid month.");
    }

    // Output the number of days to the console
    console.log(`There are ${numDays} days in month ${month} of year ${year}.`);

    // Close the readline interface
    rl.close();
  });
});

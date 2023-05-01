/*Question 20: Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
*/

const readline = require('readline');

// Create a readline interface for getting user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for the month
rl.question("Enter a month: ", function(month) {
  // Convert the input to lowercase
  month = month.toLowerCase();

  // Determine the season based on the month
  let season;
  if (["september", "october", "november"].includes(month)) {
    season = "Autumn";
  } else if (["december", "january", "february"].includes(month)) {
    season = "Winter";
  } else if (["march", "april", "may"].includes(month)) {
    season = "Spring";
  } else if (["june", "july", "august"].includes(month)) {
    season = "Summer";
  } else {
    console.log("Invalid month.");
  }

  // Output the season to the console
  console.log(`The season corresponding to ${month} is ${season}.`);

  // Close the readline interface
  rl.close();
});

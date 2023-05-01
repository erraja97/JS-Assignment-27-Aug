//Question 15: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const readline = require("readline");

// Create a readline interface for getting user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for the radius of the circle
rl.question("Enter the radius of the circle: ", (radiusStr) => {
  // Convert the input to a number
  const radius = parseFloat(radiusStr);

  // Calculate the area and circumference of the circle
  const pi = 3.14;
  const area = pi * radius * radius;
  const circumference = 2 * pi * radius;

  // Output the results
  console.log(`Area of the circle: ${area}`);
  console.log(`Circumference of the circle: ${circumference}`);

  // Close the readline interface
  rl.close();
});

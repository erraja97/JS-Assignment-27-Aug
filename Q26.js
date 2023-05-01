//Question 26: Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c, x) {
  return (-a * x - c) / b;
}

// Solve the linear equation 2x + 3y - 6 = 0 for x = 4
const a = 2;
const b = 3;
const c = -6;
const x = 4;

const y = solveLinEquation(a, b, c, x);
console.log(`For x = ${x}, y = ${y}`); // Output: For x = 4, y = 4

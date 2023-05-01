// Question 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).


let base = prompt("Enter the base of triange: ");
let height = prompt("Enter the height of triangle: ");
let area = 0.5 * base * height;

console.log(`Area of triangle with base: ${base} and height: ${height} = ${area}`);
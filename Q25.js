//Question 25: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumEvens = 0;
let sumOdds = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvens += i;
  } else {
    sumOdds += i;
  }
}

console.log(`Sum of evens: ${sumEvens}`);
console.log(`Sum of odds: ${sumOdds}`);

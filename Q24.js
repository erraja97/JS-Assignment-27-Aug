//Question 24: Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  // Check if i is prime
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  // Print i if it is prime
  if (isPrime) {
    console.log(i);
  }
}

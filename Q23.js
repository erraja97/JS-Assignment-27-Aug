/**
 * Question 23:  The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
 */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
const sortedAges = ages.sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

// Find the median age
let medianAge;
if (sortedAges.length % 2 === 0) {
  const middleIndex = sortedAges.length / 2;
  medianAge = (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2;
} else {
  const middleIndex = Math.floor(sortedAges.length / 2);
  medianAge = sortedAges[middleIndex];
}

// Find the average age
const sumAges = sortedAges.reduce((acc, age) => acc + age, 0);
const avgAge = sumAges / sortedAges.length;

// Find the range of the ages
const rangeAges = maxAge - minAge;

// Compare the value of (min - average) and (max - average), use abs() method
const diffMinAvg = Math.abs(minAge - avgAge);
const diffMaxAvg = Math.abs(maxAge - avgAge);

console.log(`Sorted Ages: ${sortedAges}`);
console.log(`Min Age: ${minAge}`);
console.log(`Max Age: ${maxAge}`);
console.log(`Median Age: ${medianAge}`);
console.log(`Average Age: ${avgAge}`);
console.log(`Age Range: ${rangeAges}`);
console.log(`Difference between Min and Average Age: ${diffMinAvg}`);
console.log(`Difference between Max and Average Age: ${diffMaxAvg}`);

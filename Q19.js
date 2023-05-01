/* Question 19: Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
*/

// Define a variable containing the student's score
const score = 85;

// Give the student a grade based on their score
let grade;
if (score >= 80 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
} else {
  console.log("Invalid score.");
}

// Output the student's grade to the console
console.log(
  `The student's score is ${score}, which corresponds to a grade of ${grade}.`
);

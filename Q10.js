//Question 10: Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

let num1 = 10;
let num2 = 25;
let char1 = '25';

//truthy value
console.log(num1 < num2);
console.log(num1 % 5 == 0);
console.log(num2 != num1);
console.log(num2 == char1);//compare only equivalent ASCII value

//falsy value
console.log(num2 < num1);
console.log(num1 == num2);
console.log(num2 % 2 == 0);
console.log(num2 === char1);//compare variable type also
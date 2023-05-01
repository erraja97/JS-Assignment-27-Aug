//Question 8: Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

let phrase = "You cannot end a sentence with because because because is a conjunction";
let phraseArray = phrase.split(" ");
console.log(phraseArray.indexOf("because"));
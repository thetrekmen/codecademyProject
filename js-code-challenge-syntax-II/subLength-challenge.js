/*
subLength()

Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/

// Write function below
//notes:  i created a function that could take two parameters.  a string and a single character
const subLength = (str, letter) => {
//this is a variable that will count the number of occurrences of a the letter
    let numberOfLetters = 0;
//this is a variable that will hope to the next letter after the counter in the loop as ticked
    let position = str.indexOf(letter);
//this is a variable that will keep track of the first letter index
    let firstIndex = str.indexOf(letter);
//this is a variable that will keep track of the second letter index
    let secondIndex = str.indexOf(letter, (firstIndex + 1));
//this is a variable that will keep track of the number between two letters
    let count = 1;
//created a while loop to count the number of occurrences a letter appears on a string.  the while loop will tick so as long as the position variable is true.
    while (position !== -1) {
//if the while loop is true you can see the tick for numberOfLetters aswell as the new position being updated for postion.  it will loop again until position is false "no more occurrences of the letter"
        numberOfLetters++;
        position = str.indexOf(letter, position + 1);
//I have if else statements that will kick back 0 if the number of occurrences exceed 2 or are less than 2.
    } if (numberOfLetters < 2) {
        return numberOfLetters = 0;
    } else if (numberOfLetters > 2) {
        return numberOfLetters = 0;
//here is a else statement that will execute a for loop so as long there are exactly 2 of the same letters in the string.
    } else {
//the forloop will start at the first occurrence of the letter in the string.  and count to the second occurrence of the letter in the string.
        for (let i = firstIndex; i < secondIndex; i++) {
            count++;
        } return count;
    }
};

console.log(subLength("saturday", "a"))
console.log(subLength("summer", "m"))
console.log(subLength("happy", "p"))
console.log(subLength("important", "t"))
console.log(subLength("information", "i"))
console.log(subLength("digitize", "i"))
console.log(subLength("cheesecake", "k"))

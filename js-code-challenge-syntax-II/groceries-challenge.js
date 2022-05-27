/*
groceries()

Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
*/

let items4 = [{ item: 'Carrots' }, { item: 'Hummus' }, { item: 'Pesto' }, { item: 'Rigatoni' }];
let items2 = [{ item: 'Bread' }, { item: 'Butter' }];
let items1 = [{ item: 'Cheese Balls' }];

// Write function below
//notes: made a function that takes an array for its parameter
const groceries = (array) => {
// i declared an empty array that will be filled ".push" at the end of the function
    let newString = [];
// declared a variable that has a function that maps a object value to a new array call oldString.
    let oldString = array.map(function (elem) {
        return elem.item;
    });
// i have a for loop that will iterate through the length of the array
    for (i = 0; i < oldString.length; i++) {
// if statement checks if there is only one element inside of the array.  if so it will not concatenate and only send just the old arrays element
        if (oldString.length === 1) {
            newString.push(oldString[i]);
// will check if the loop is at its end minus 1 "if i dont do minus one this concatenation will be behind the last element" concatenates " and " and pushes the last element from the orginal array
        } else if (i === oldString.length - 1) {
//******take note of how i am modifing the array.  im actually pushing the old element into the new array but also concatenating the commas and and inside the actual element*********
            newString.push(" and " + oldString[i]);
//will check if the loop is at its end minus 2.  the reason why i added this one was becasue there was still a comma before the " and ".  this else if removes that comma.
        } else if (i === oldString.length - 2) {
            newString.push(oldString[i] + "");
//this will add commas between all elements in the array besides the special cases above
        } else {
            newString.push(oldString[i] + ", ");
        }
//this will now return the new array but with .join to convert it into a string
    } return newString.join("");
}

console.log(groceries(items1));



//console.log(items4.map(e => e.item).join(", "));




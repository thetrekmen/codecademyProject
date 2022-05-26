/* 
isTheDinnerVegan()

Write a function isTheDinnerVegan() that takes in an array of food objects in the format:

{name: 'cabbage', source: 'plant' }
and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

const meal = [
    {name: 'arugula', source: 'plant'}, 
    {name: 'tomatoes', source: 'plant'}, 
    {name: 'lemon', source:'plant'}, 
    {name: 'olive oil', source: 'plant'}];
 
isTheDinnerVegan(meal); // Should return true
You can test your function when you’re ready by passing in the dinner array or by making your own!
 */

// Write your code here:
//i created a function that took in an array as its parameter.  i then ran a for loop to iterate through each of the arrays elements.  The if statement is comparing each elements "source" key to the string "plant"  if plant is NOT present in all the elements source key it will return false. else it will return true.
const isTheDinnerVegan = (array) => {
    for (let i = 0; i < array.length; i++)
    if (array[i].source !== "plant") {
        return false;
    } else {
        return true;
    }
}

// Feel free to comment out the code below to test your function
const dinners = [
    {name: 'arugula', source: 'plant'}, 
    {name: 'tomatoes', source: 'plant'}, 
    {name: 'lemon', source:'plant'}, 
    {name: 'olive oil', source: 'plant'}];


const dinner = [
    {name: 'hamburger', source: 'meat'}, 
    {name: 'cheese', source: 'dairy'}, 
    {name: 'ketchup', source:'plant'}, 
    {name: 'bun', source: 'plant'}, 
    {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinners))
console.log(isTheDinnerVegan(dinner))
// Should print false

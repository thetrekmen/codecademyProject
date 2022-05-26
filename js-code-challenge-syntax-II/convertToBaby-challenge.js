/*
convertToBaby()

Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

Note: You may have noticed how convenient it would be to use map, but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!
*/

//notes: i created a function that took another array as its parameter "baby".  The argument created an empty array "babyAnimal".  I then created a for Loop with "i" as the variable.  I then made the function .push the parameter "animals" into the new array "babyAnimal" with a string "baby " for each loops iteration.  I then returned the new array at the end of the function.
let convertToBaby = (baby) => {
    let babyAnimal = [];
    for (let i = 0; i < baby.length; i++) {
        babyAnimal.push("baby " + baby[i]);
    } return babyAnimal
};

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals)); 
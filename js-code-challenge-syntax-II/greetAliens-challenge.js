/*
greetAliens()

Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”
*/

//notes: created a function that implemented a for loop to iterate through the parameter which was an array "aliens".  The variable "i" was used as the arrays index position for the array.  I then string interpolated the array's indexed items in to a string.
let greetAliens = (alien) => {
    for (let i = 0; i < alien.length; i++) {
        console.log(`Oh powerful ${alien[i]}, we humans offer our unconditional surrender!`);
    };
};

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
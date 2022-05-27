/*
factorial()

Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:

factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
Assume only positive numbers will be given as an argument for the factorial() function.
*/

// Write function below
//notes: made a function that accepted a number.
const factorial = (number) => {
//i set the value of the variable to the parameter set inside the function.
    let results = number;
/* set a for loop that will count back from the number set in the function minus 1.  look at the factorial on wiki to understand why...
https://en.wikipedia.org/wiki/Factorial
*/
    for (let i = number - 1; i >= 1; i--) {
// i then had the result variable multiply by "i" over and over until the loop was done.
        results *= i;
    }; return results
}; 

console.log(factorial(6))
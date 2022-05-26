/*
squareNums()

Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

You can test your function when you’re ready by passing in the numbers array or by making your own array!
*/

//notes: i created a function that used the .map() method against its parameter.  The .map() directly called the toSquare function to do the maths for squaring each element within the array.
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:

let squareNums = (array) => {
    return array.map(toSquare)
} 

console.log(squareNums(numbers))
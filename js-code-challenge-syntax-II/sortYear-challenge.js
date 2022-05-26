/*
sortYears()

Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

You can test your function when you’re ready by passing in the years array or by making your own array of years!
*/

// Write your code here:
//this is not an efficient way of writing this function.  the function below is...  however , this is what i orginally came up with so i kept it in for notes.  made a function that accepts arays.  also they didnt accept this function even though it did exactly what they asked it to do.
let sortYear = (array) => {
    
    //declared an empty array for use later.  the final array will be .push here
    let newArray = [];

    //this nested function sorts the array
    function sortArray(array) {
        return array.sort();
    }   sortArray(array);

    //furthermore this nested function takes the newly sorted array and spits it back out into a new array in decending order with a for Loop.
    function decending(sortArray) {
        for (let i = array.length - 1; i >= 0; i--) {
            newArray.push(sortArray[i]);
        } return newArray;
    } return decending(sortArray(array));
};

/*
this function can be found directly on the MDN page where it talks about the compare parameters  for .sort.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#parameters
(in just not very clear on the different types of functions.  the syntax can completely change the functions behavior.. need to study this more deeper)
*/
const sortYears = arr => arr.sort((x, y) => y - x);

// Feel free to uncomment the below code to test your function:
///*
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
console.log(sortYear(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
//*/

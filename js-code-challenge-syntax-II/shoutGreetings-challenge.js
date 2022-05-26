/*
shoutGreetings()

Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the greetings array or by making your own array!
*/

// Write your code here:
//notes:  a function that accepts an array as its parapeter.  (note how i used several nested functions inside the global function.  check the syntax.  i used "function" to declare and also called the function at a higher level afterwards so that it would be active when the global function is called.)
let shoutGreetings = (array) => {
    //declared an empty array for use later.  the final array will be .push here
    let newArray = [];

    //converted the array into a string so that i can capitalize everything.  (i couldnt find a way to capitalize a array so i just converted it into a string instead)
    function aString(array) {
       return array.toString();
    } aString(array);

    //im now capitalizing the string
    function allCaps(aString) {
        return aString.toUpperCase();
    } allCaps( aString(array) );

    //im now converting the string back into an array
    function anArray (allCaps) {
        return allCaps.split(",");
        } anArray( allCaps(aString(array)) );
    
    //last but not least i take the newly converted array and .push "!" at the end of each element.  (i guess i could have used .map instead of the for Loops but whatever)
    function bang(anArray) {
        for (let i = 0; i < anArray.length; i++) {
            newArray.push(anArray[i] + "!");
        } return newArray;
    } return bang( anArray(allCaps(aString(array))) );
};

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
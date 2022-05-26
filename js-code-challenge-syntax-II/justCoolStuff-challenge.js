/*
justCoolStuff()

Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];
 
justCoolStuff(arr1, arr2); // Should return ['this']
You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own!
*/

// Write your code here:
//using the .filter() method to find elements that are present in both arrays.  notes the global array takes in two arrays as its parameters.  a variable is declared that uses the .filter method on the first array.  also note (x) is used to iterate through the array.  .includes is used to find the element also inluded in the second array while (x) is used to iterate.
let justCoolStuff = (myStuff, coolStuff) => {
let difference = myStuff.filter(x => coolStuff.includes(x));
return difference;
}

// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]


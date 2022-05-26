/* 
findMyKeys()

Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.

const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
findMyKeys(drawer);
// Should return -1
You can use any technique you want to accomplish this task. Though, if you look, there’s a built-in method that will make pretty quick work of it.

You can test your function when you’re ready by passing in the randomStuff array or by making your own array!
*/

// Write your code here:
//created a global array
const findMyKeys = (array) => {
/*created a variable with a .findIndex function for the global arrays parameter.  the array compares the elements to "keys".  if found it will return the index number if not -1.  this is from MDN example:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#find_index_using_arrow_function
*/
    const index = array.findIndex(array => array === "keys");
    return index;
}

// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff));
// Should print 4

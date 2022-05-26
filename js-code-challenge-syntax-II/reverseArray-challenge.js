/*
reverseArray()

Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!
*/

//notes: i made a function that will take the given array "sentence" and reverse its index order and .push it into a new array "newSentence".  I used a reverse for Loop with the variable "i" representing the arrays index position. then just returned the new array.
const reverseArray = (reverse) => {
    let newSentence = [];
    for (let i = reverse.length-1; i >= 0; i--) {
      newSentence.push(reverse[i]);
    } return newSentence;
  }
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];
  
  
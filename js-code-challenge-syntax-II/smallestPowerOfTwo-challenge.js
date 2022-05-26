/*
Fix The Broken Code!

We wrote a function, smallestPowerOfTwo(), which takes in an array.

Within our function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than the current element before using .push() to add it to results.

It’s not doing what we want. Can you fix our code, please?
*/

//BELOW IS THE ORIGNAL CODE WITH THE BUG//
/*
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            i = 1;
            while (i < number) {
                  i = i * 2;
            }
            results.push(i);
      }
      return results
}


console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
*/
//ABOVE IS THE ORIGINAL CODE WITH THE BUG//


//BELOW IS THE CHANGES I MADE
//notes: i first noticed the function seemed to be performing what it was supposed to do in regards to calculating the smallest power of two which is greater than the current element.  the first element was being converted to 8.  which is good.  however, i noticed the loop was not iterating through all the elements.  so i was a bit confused and placed a console.log(results) in the first loop to see if the new array was receiving all of the elements from the numbers array.  it was not.  only 5!.  i noticed the variable "i" that controls the iteration of the loop was also being used as the variable for calculating the power of 2.  that was reseting the loops iteration.  so i gave the power of 2 a new variable name "j" and all was well.
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            // console.log(results)
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
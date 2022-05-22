// Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.

// Write your function here:
const agreeOrDisagree = (argument1,argument2) => {
    if (typeof argument1 !== 'string' || typeof argument2 !== 'string') {
      return 'you need a string'
    } else if (argument1 === argument2) {
      return 'You agree!';
      } else {
          return 'You disagree!';
    }
  }
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(agreeOrDisagree("yep","yep")) 
  // Should print 'You agree!'
  
  // We encourage you to add more function call of your own to test your code!
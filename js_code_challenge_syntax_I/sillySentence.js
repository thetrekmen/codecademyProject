/*
Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function:
*/

// Write your function here:
const sillySentence = (blank_1,blank_2,blank_3) => {
    if (typeof blank_1 !== 'string' || typeof blank_2 !== 'string' || typeof blank_3 !== 'string') {
      return 'invalid input!'
    } else {
      return `I am so ${blank_1} because I ${blank_2} coding! Time to write some more awesome ${blank_3}!`
    }
  }
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(sillySentence('excited', 'love', 'functions')) 
  
  // We encourage you to add more function calls of your own to test your code!
  
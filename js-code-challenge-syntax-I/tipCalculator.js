/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

tipCalculator('good', 100) // Should return 20
*/

// Write your function here:
const tipCalculator = (quality,total) => {
    if (typeof total !== 'number') {
      return 'you need to input a $ monetary value';
    } else if (quality === 'bad') {
      return ((5 / 100) * total).toFixed(2);
    } else if (quality === 'ok') {
      return ((15 / 100) * total).toFixed(2);
    } else if (quality === 'good') {
      return ((20 / 100) * total).toFixed(2);
    } else if (quality === 'excellent') {
      return ((30 / 100) * total).toFixed(2);
    } else {
      return ((18 / 100) * total).toFixed(2);
    }
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(tipCalculator('bleh', 100.20)) //should return 20
  
  // We encourage you to add more function calls of your own to test your code!
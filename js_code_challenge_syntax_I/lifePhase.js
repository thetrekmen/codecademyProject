/*
Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'
*/

// Write your function here:
const lifePhase = (age) => {
    if(typeof age !== 'number'){
      return 'You Need A Number!'
    } else if (age > 0 && age <= 3){
        return 'baby';
    } else if (age >= 4 && age <= 12){
        return 'child';
    } else if (age >= 13 && age <= 19){
        return 'teen';
    } else if (age >= 20 && age <= 64){
        return 'adult';
    } else if (age >= 65 && age <= 140){
        return 'senior citizen';
    } else {
        return 'This is not a valid age';
    }
  }
  
  
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(lifePhase(35)) //should print 'child'
  
  // We encourage you to add more function calls of your own to test your code!
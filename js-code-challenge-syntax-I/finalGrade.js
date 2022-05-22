/*
Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'
*/

// Write your function here:
const finalGrade = (grade_a,grade_b,grade_c) => {
    const grade = Math.round((grade_a + grade_b + grade_c) / 3);
    if(typeof grade_a !== 'number' || typeof grade_b !== 'number' || typeof grade_c !== 'number') {
      return 'NaN';
    } 
    if ((grade_a < 0 || grade_a > 100) || (grade_b < 0 || grade_b > 100) || (grade_c < 0 || grade_c > 100)){
      return 'You have entered an invalid grade.';
    } else if (grade >= 0 && grade <= 59) {
        return 'F';
    } else if (grade >= 60 && grade <= 69) {
        return 'D';
    } else if (grade >= 70 && grade <= 79) {
        return 'C';
    } else if (grade >= 80 && grade <= 89) {
        return 'B';
    } else if (grade >= 90 && grade <= 100) {
        return 'A';
    } else {
        return 'undefined';
    }
  }
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(100, 100, 99)) // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!
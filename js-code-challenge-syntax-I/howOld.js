/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:

'You will be [calculated age] in the year [year passed in]'
If the year is before they were born, you should return a string in the following format:

'The year [year passed in] was [calculated number of years] years before you were born'
If the year is in the past but not before the person was born, you should return a string in the following format:

'You were [calculated age] in the year [year passed in]'
*/

// Write your function here:
const howOld = (age,year) => {
    const pastAge = age - (2022-year);
    const futureAge = age + (year-2022);
    if (pastAge < 0) {
      const neverAge = Math.abs(pastAge);
      return `The year ${year} was ${neverAge} years before you were born`;
    } else if (pastAge === 0) {
        return `${year} is the year you were born`;
    } else if (year < 2022) {
      return `You were ${pastAge} in the year ${year}`
    } else if (year > 2022) {
      return `You will be ${futureAge} in the year ${year}`;  
    }
  }
  

  // Once your function is written, write function calls to test your code!
  console.log(howOld(36,2025));
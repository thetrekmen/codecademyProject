// variable of my age
const myAge = 35;

//varible for the first two years of a dogs life. Since we accounted for the first 2 years we're subtracting 2 years from "my age". Furthermore, we'll multiple my remaining years by 4 to account for the later years. Finally we will solve by adding early and laterYears together.
let earlyYears = 10.5 * 2;
let laterYears = (myAge - 2) * 4;
const myAgeInDogYears = laterYears + earlyYears;

//I've added a variable for "my name" and lower cased the letters
const myName = ('Patrick'.toLowerCase());

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

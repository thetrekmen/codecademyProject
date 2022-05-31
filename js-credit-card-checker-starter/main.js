// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Add your functions below:

////////////////validateCred below////////////////
//notes: created a function that accepts an array and will check it against the Luhn's algorithm
const validateCred = (array) => {
// ive created variables that will store the odd and even indexs in the array.  the odd index numbers get doubled.  the initialValue is used for the .reduce method later on.  the counter variable is how im keeping track of the odds and even.  i know i didnt need this las variable... but i was having issues using the "i" varible in the loop to keep track of the index position.
    let doubleArray = [];
    let newArray = [];
    let initialValue = 0;
    let count = 0;
//this for loop starts at the last index position in the array and iterates backwards.
    for (i = array.length - 1; i >= 0; i--) {
        count++;
// if its the first index postion or the last index postion in hte array thats the check digit.  we just push that into the newArray "even"
        if (0 === count) {
            newArray.push(array[i]);
        }
// this will push every other number starting at the index after 0 to the double array and also double its value.
        else if (count % 2 == 0) {
            doubleArray.push(array[i] * 2);
        } 
//all other indexs are pushed to the newArray with no changes.
        else {
            newArray.push(array[i]);
        }
    }

//this is where i could have just nest another if statment below the if statements above but it was late when i was wrting this and i wasnt thinking very straight :)  anyways this will check if any of the numbers in the double array have a value more than 9.  if they do 9  is subtracted from them and they are then sent to the newArray.  if their value is also already below 9 they are just sent to the new array no change.
    for (j = 0; j < doubleArray.length; j++) {
        if (doubleArray[j] > 9) {
            newArray.push(doubleArray[j] - 9);
        } else {
            newArray.push(doubleArray[j]);
        }
    }

//here i use the .reduce method to add up the sum of all the values in the newArray.
    const sumWithInitial = newArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    ); 

// the result of the sumWithInitial with sum modulo 10 requiring 0 remainder.  if true card is good.  if false card is bad.
    return sumWithInitial % 10 == 0;
};

//console.log("validateCred: " + validateCred(mystery1))

////////////////validateCred above////////////////


let badBatch = []

////////////////findInvalidCards below////////////////
//notes: this function will find cards that do not pass the luhns algorithm within a batch of cards.
const findInvalidCards = (arr) => {

    //let badBatch = [];

    for (k = 0; k < arr.length; k++) {
//this function is using a global function to check if the cards are good by iterating through each card via index postion [k].  if its false it will be pushed to the badBatch array.  ive created the array in the function aswell as making it a global array.
         if (validateCred(arr[k]) === false) {
            badBatch.push(arr[k])
        }

    } return badBatch
    
};

//console.log(findInvalidCards(batch))
findInvalidCards(batch)
//console.log(badBatch)
////////////////findInvalidCards above////////////////

////////////////idInvalidCardCompanies below////////////////
//notes: this funtion will check for which card companies have shipped invalid credit card numbers.  it will return the name of the companies but the kicker is the company's name cannot repeat even if it has multiple cards that are bad.  i will admit i stumbled my way through this...
const idInvalidCardCompanies = (arr) => {

let invalidCardCompanies = [];
//i created a for loop that will iterate through each index postion.  i also have the if statements looking at the first number of each cards [0] and checking it against the cc companies respective card numbers.  if it matches we'll push that company's name to the invalidCardCompany array.  also notice the break at the end of the last else if for "Discovery"  that stops the loop from repeating :)
    for (n = 0; n < arr.length; n++) {
        if (arr[n][0] === 3) {
            invalidCardCompanies.push("Amex");
         }

         else if (arr[n][0] === 4) {
            invalidCardCompanies.push("Visa");
         }

         else if (arr[n][0] === 5) {
            invalidCardCompanies.push("Mastercard");
         }

         else if (arr[n][0] === 6) {
            invalidCardCompanies.push("Discover");
            break
         } 
    }
// here is where i just couldnt figure out how to add this block of code inside of the for loop above so i just broke it into its own loop....  not good but it works.  this loop will check if the first digit of the cc's do not match the company's number.  if it doesnt it just returns a string.
    for (n = 0; n < arr.length; n++) {
        if (arr[n][0] > 6) {
            invalidCardCompanies.push("Company Not Found");
            break
        }

        else if (arr[n][0] < 3) {
            invalidCardCompanies.push("Company Not Found");
        break
        }
    } return invalidCardCompanies
}

console.log(idInvalidCardCompanies(batch))
////////////////idInvalidCardCompanies above////////////////

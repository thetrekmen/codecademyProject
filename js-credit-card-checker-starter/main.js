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

//you'll need the .reduce method to add up all the elements in the array


// Add your functions below:

////////////////validateCred below////////////////

const validateCred = (array) => {
    let oddArray = [];
    let newArray = [];
    let initialValue = 0;
    let count = 0;

    for (i = array.length - 1; i >= 0; i--) {
        count++;
        if (0 === count) {
            newArray.push(array[i]);
        }
        else if (count % 2 == 0) {
            oddArray.push(array[i] * 2);
        } else {
            newArray.push(array[i]);
        }
    }

    for (j = 0; j < oddArray.length; j++) {
        if (oddArray[j] > 9) {
            newArray.push(oddArray[j] - 9);
        } else {
            newArray.push(oddArray[j]);
        }
    }

    const sumWithInitial = newArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    ); 
    
    return sumWithInitial % 10 == 0;
};

//console.log("validateCred: " + validateCred(mystery1))

////////////////validateCred above////////////////


//let badBatch = []
let badBatch = [[3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4], [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3], [7, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]]


////////////////findInvalidCards below////////////////

const findInvalidCards = (arr) => {

    //let badBatch = [];

    for (k = 0; k < arr.length; k++) {

         if (validateCred(arr[k]) === false) {
            badBatch.push(arr[k])
        }

    } return badBatch
    
};

//console.log(findInvalidCards(batch))
//findInvalidCards(batch)
//console.log(badBatch)
////////////////findInvalidCards above////////////////

////////////////idInvalidCardCompanies below////////////////

const idInvalidCardCompanies = (arr) => {
    amex = [];
    visa = [];
    mastercard = [];
    discover = [];

    for (l = 0; l < arr.length; l++) {

        if (arr[l][0] === 3) {
           amex.push(arr[l]);
        }

       if (arr[l][0] === 4) {
            visa.push(arr[l]);
        }

        if (arr[l][0] === 5) {
            mastercard.push(arr[l]);
        }

        if (arr[l][0] === 6) {
            discover.push(arr[l]);
        }

        else {
             "Company not found";
        }
    } //return amex;

cards = [{_Amex:[]},{_Visa:[]},{_Mastercard:[]},{_Discover:[]},{_companyNotFound:[]}]

    for (m = 0; m < arr.length; m++) {
        if (arr[m][0] === 3) {
            cards[0]._Amex.push(arr[m]);
         }

         if (arr[m][0] === 4) {
            cards[1]._Visa.push(arr[m]);
         }

         if (arr[m][0] === 5) {
            cards[2]._Mastercard.push(arr[m]);
         }

         if (arr[m][0] === 6) {
            cards[3]._Discover.push(arr[m]);
         }

         if (arr[m][0] === !3-6) {
            cards[4]._companyNotFound.push(arr[m]);
         }

    } //return cards[4];

let invalidCardCompanies = [];

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
console.log(idInvalidCardCompanies(badBatch))
////////////////idInvalidCardCompanies above////////////////


//console.log(cards[0].visa[0])
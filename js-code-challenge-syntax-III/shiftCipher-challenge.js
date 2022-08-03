/* 
A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
In both methods, any character outside the alphabet should remain the same.
But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z. 
*/


// Feel free to reference the Unicode Table https://en.wikipedia.org/wiki/List_of_Unicode_characters as well as the JavaScript String methods https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String including: toUpperCase(), toLowerCase(), charCodeAt() and fromCharCode()


// Write class below
class ShiftCipher {
    constructor(num) {
        this._num = num;
    }

    encrypt(string) {
        /* turns string to uppercase */
        const upperCased = string.toUpperCase();
        /* turns string to an array */
        const splitEncryptString = upperCased.split("");
        /* turns string to unicode */
        let uniCodeEncryptString = splitEncryptString.map( (char) => {
            let uniCodeEncryptStrings = char.charCodeAt();
            return uniCodeEncryptStrings;
        }); uniCodeEncryptString;
        // console.log(uniCodeEncryptString)
        /* empty array that will house the array after the cipher number has been added */
        let plusNumKey = [];
        /* adds the cipher number to each element in the array thats above the number 65 and below 90 unicode.  65-90 is important because the upper case alphbet is within that range.  so all the special case characters will be pushed without the addition from the cihper number. 
        
        *** note i get the remainder of the cypher key if its over 26.  i do this because if its a huge number for the cypher key i only need to know what the remainder is after 26. its 26 letters in the alhpabet.  so the remainder will be added to the elements.
        */
        const addKeyNum = () => {
            for (let i = 0; i < uniCodeEncryptString.length; i++) {
                if (uniCodeEncryptString[i] >= 65 && uniCodeEncryptString[i] <= 90) {
                    if (this._num >= 26) {
                        plusNumKey.push(uniCodeEncryptString[i] + (this._num % 26));
                    }
                    else {
                        plusNumKey.push(uniCodeEncryptString[i] + this._num);
                    }
                } 
                else  {
                    plusNumKey.push(uniCodeEncryptString[i]);
                }
            } 
        }; addKeyNum();
        plusNumKey
        // console.log(plusNumKey);
        

        let finalMathEncryptArray = [];
        /* if the array element is under 90 i just throw it into the new arrays, its GTG.  else i will use the if statement to get the remainder of 90.  i then add that to the number 64 which is one less than the start of the unicode alphabet this is how i restart the loop for the alphabet */
        const elementOver90 = () => {
            for (let j = 0; j < plusNumKey.length; j++) {
                if (plusNumKey[j] <= 90) {
                    finalMathEncryptArray.push(plusNumKey[j])
                }
                else if (plusNumKey[j] > 90) {
                    finalMathEncryptArray.push(( plusNumKey[j] % 90 ) + 64);
                }
            }
        }; elementOver90();
        finalMathEncryptArray
        // console.log(finalMathEncryptArray);

            
        /* convert the array of numbers back to alphabet*/
        const numToLetter = finalMathEncryptArray.map(m => String.fromCharCode(m));
        // console.log(numToLetter);
        numToLetter

        const encryptArrayToString = numToLetter.join("")
        return encryptArrayToString;
    }



    decrypt(string) {
        const lowerCased = string.toLowerCase();
        const splitDecryptString = lowerCased.split("");
        // console.log(splitDecryptString)

        let uniCodeDecryptString = splitDecryptString.map( (char) => {
            let uniCodeDecryptStrings = char.charCodeAt();
            return uniCodeDecryptStrings;
        }); uniCodeDecryptString;
        // console.log(uniCodeDecryptString)

        let minusNumKey = [];

        const minusKeyNum = () => {
            for (let k = 0; k < uniCodeDecryptString.length; k++) {
                if (uniCodeDecryptString[k] >= 97 && uniCodeDecryptString[k] <= 122) {
                    if (this._num >= 26) {
                        minusNumKey.push(uniCodeDecryptString[k] - (this._num % 26));
                    }
                    else {
                        minusNumKey.push(uniCodeDecryptString[k] - this._num);
                    }
                } 
                else  {
                    minusNumKey.push(uniCodeDecryptString[k] - .5);
                }
            } 
        }; minusKeyNum();
        minusNumKey
        // console.log(minusNumKey);

        let finalMathDecryptArray = [];

        const elementUnder97 = () => {
            for (let l = 0; l < minusNumKey.length; l++) {
                if (minusNumKey[l] >= 97) {
                    finalMathDecryptArray.push(minusNumKey[l])
                }
                else if (minusNumKey[l] < 97 && minusNumKey[l] === Math.floor(minusNumKey[l])) {
                    finalMathDecryptArray.push( 123 - ( 97 % minusNumKey[l] ));
                }
                else if (minusNumKey[l] < 97 && minusNumKey[l] !== Math.floor(minusNumKey[l])) {
                    finalMathDecryptArray.push( minusNumKey[l] + .5 )
                }
            }
        }; elementUnder97();
        finalMathDecryptArray
        // console.log(finalMathDecryptArray)


        const numToLetterDecrypt = finalMathDecryptArray.map(m => String.fromCharCode(m));
        // console.log(numToLetterDecrypt);
        numToLetterDecrypt

        const decryptArrayToString = numToLetterDecrypt.join("")
        return decryptArrayToString;

    };
}



const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'



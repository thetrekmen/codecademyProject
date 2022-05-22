//I was learning how to debug some code using the console.log() method.  place the console.log() method at the top of the code in the first set of logic and work your way down until you've identified and solved all the issues.

// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
function getLaterFirstLetter(string1, string2) {
    const firstLetter1 = string1.charAt(1);
    const firstLetter2 = string2.charAt(1);
    console.log(firstLetter1)
    console.log(firstLetter2)

    if (firstLetter1 === firstLetter2) {
        return null;
    } else if (firstLetter1 > firstLetter2) {
        return string2;
    } else {
        return string1;
    }
}

// Should return "blueberry"
console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));

// Should return "zebra"
console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));

// Should return null
console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));
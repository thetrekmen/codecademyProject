/*
declineEverything() and acceptEverything()

1.  Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

You can test your function when you’re ready by passing in the veggies array or by making your own array!

2.  Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the veggies array or by making your own array!
*/

const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

// Write your code here:

//notes: for this function i executed the .forEach method on the functions parameter that accepted arrays.  I then applied the politelyDecline variable directly to the .forEach method.  ***Orginally I was trying to make the .forEach receive a function that uses politelyDecline.***
let declineEverything = (array) => {
  array.forEach(politelyDecline);
};

//notes:  I created this function to accept an array as its parameter.  I then applied the .forEach to the parameter to loop through each element and log a string interpolation with each element appended for its iterations.
let acceptEverything = (array) => {
    array.forEach(element => {
        console.log(`Ok, I guess I will eat some ${element}.`)
    });
}

declineEverything(veggies);
acceptEverything(veggies)
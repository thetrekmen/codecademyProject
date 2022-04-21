// below we will log Kelvin as a variable;
const Kelvin = 293;
console.log(`${Kelvin} degrees Kelvin`);

//below we will convert Kelvin to Celsius;
const Celsius = Kelvin - 273;
console.log(`The temperature is ${Celsius} degrees Celsius.`);

//below we will convert Celsius to Fahrenheit. .floor method has been added to round down from decimals;
let Fahrenheit = Math.floor(Celsius * (9/5) + 32);
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);

//below we will convert Celsius to Newton.  .floor method has been added to round down from decimals;
let Newton = Math.floor(Celsius * (33/100));
console.log(`The temperature is ${Newton} degrees Newton.`);

/* 
dogFactory

1.
Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }

2.
Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

3.
Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1
*/
//notes: made a function that took 3 parameters.  the parameters were returned into an object inside the function.  furthermore the eatTooManyTreats function would increament the weight by 1.  you can see th weight's results after the treats functiion is run seperately.
const dogFactory = ( name, breed, weight ) => {
    return {
        _name: name, 
        _breed: breed, 
        _weight: weight,
        bark() {
            return "ruff! ruff!"
        },
        eatTooManyTreats() {
            return this._weight++
        },
//GETTERS BELOW
//notes:  made getters to pull the properties of the object
        get name(){
          return this._name
        },
        get breed(){
          return this._breed
        },
        get weight(){
          return this._weight
        },
//GETTERS ABOVE
//SETTERES BELOW
//notes: made setters to set the properties of the object
        set name(name){
            if(typeof name === "string"){
                this._name = name;
            } else {
                console.log("you must use alphabetical letters for name");
            }
        },
        set breed(newBreed){
            if(typeof newBreed === "string"){
                this._breed = newBreed;
            } else {
                console.log("you must use alphabetical letters for breed");
            }
        },
        set weight(newWeight){
            if(typeof newWeight === "number"){
                this._weight = newWeight;
            } else {
                console.log("you must use numbers for Weight");
            }
        }
//SETTERES BELOW
    }
}


const Duke = dogFactory("Duke","Presa Canario", 6);

dogFactory.age = 5;
dogFactory.breed = "german shepard";
dogFactory.names = "happy";

console.log(dogFactory.age);
console.log(dogFactory.breed);
console.log(dogFactory.names);
console.log(Duke.name)
console.log(Duke.breed)
console.log(Duke.weight)
console.log(Duke.eatTooManyTreats())
console.log(Duke.weight)

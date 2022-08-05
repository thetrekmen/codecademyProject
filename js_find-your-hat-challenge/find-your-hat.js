const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let xCoord = 0;
let yCoord = 0;


class Field {
  constructor(field) {
    this._field = field;
  }

  play() {
    let playerLoc = this._field[yCoord][xCoord] = pathCharacter;

    console.log("| * = character's position |")
    console.log("| ░ = empty space          |")
    console.log("| O = hole                 |")
    console.log("| ^ = hat                  |")
    console.log("| move with: aswd          |")
    console.log("avoid the holes and get to your hat")
    this.print()
    let move = prompt("Which way?: ")
    let outOfBounds;
      if (move == "w") {
        playerLoc = this._field[yCoord][xCoord] = fieldCharacter;
        if (yCoord === 0) {
          console.log("out of bounds!")
        }
        else {
          yCoord -= 1
          if (this._field[yCoord][xCoord] == hole) {
            console.log("you lose!")
          }
          else if (this._field[yCoord][xCoord] == hat) {
            console.log("you win!")
          }
          else {
            this.play();
          }
        }
      }
      else if (move == "s") {
        playerLoc = this._field[yCoord][xCoord] = fieldCharacter;
        if (yCoord >= this._field.length -1) {
          console.log("out of bounds!")
        }
        else {
          yCoord += 1
          if (this._field[yCoord][xCoord] == hole) {
            console.log("you lose!")
          }
          else if (this._field[yCoord][xCoord] == hat) {
            console.log("you win!")
          }
          else {
            this.play();
          }
        }
      }
      else if (move == "a") {
        playerLoc = this._field[yCoord][xCoord] = fieldCharacter;
        if (xCoord === 0) {
          console.log("out of bounds!")
        }
        else {
          xCoord -= 1
          if (this._field[yCoord][xCoord] == hole) {
            console.log("you lose!")
          }
          else if (this._field[yCoord][xCoord] == hat) {
            console.log("you win!")
          }
          else {
            this.play();
          }
        }
      }
      else if (move == "d") {
        playerLoc = this._field[yCoord][xCoord] = fieldCharacter;
        if (xCoord >= this._field.length -1) {
          console.log("out of bounds!")
        }
        else {
          xCoord += 1
          if (this._field[yCoord][xCoord] == hole) {
            console.log("you lose!")
          }
          else if (this._field[yCoord][xCoord] == hat) {
            console.log("you win!")
          }
          else {
            this.play();
          }
        }
      }
      else {
        this.play()
      }
  }

  print() {
    this._field.forEach(element => console.log(element.join("")));
  }

  
}

let fieldGenerator = (size) => {
  let min = size;
  let max = size*2;
  let aField = [];

  for (let k = 0; k < size -1; k++) {
    aField.push([])
    for (let l = 0; l < size -1; l++) {
      if (Math.floor(Math.random() * 4) === 2 ) {
        aField[k].push(hole)
      }
      else {
        aField[k].push(fieldCharacter)
      }
    }
  }
  aField[Math.floor(Math.random() * size - 1)][Math.floor(Math.random() * size - 1)] = hat;
  return aField;

}


const myField = new Field(fieldGenerator(16));

myField.play()

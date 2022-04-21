//ternary expression for greeting the user
let userName = 'Patrick';
userName ?
  console.log(`Hello, ${userName}!`) :
  console.log('Hello!');

//a variable for the user's question
let userQuestion = 'will I get back in 2022?';
console.log(`${userName} asks, ${userQuestion}`);

//random number generator multiplied by 8
let randomNumber = Math.floor(Math.random() * 8);


//an empty variable for the eightball that will get filled later
let eightBall = randomNumber;

//switch statement for the eightball's answers
switch (eightBall) {
  case 0:
  console.log('It is certain');
  break;
  case 1:
  console.log('It is decidedly so');
  break;
  case 2:
  console.log('Reply hazy try again');
  break;
  case 3:
  console.log('Cannot predict now');
  break;
  case 4:
  console.log('Do not count on it');
  break;
  case 5:
  console.log('My sources say no');
  break;
  case 6:
  console.log('Outlook not so good');
  break;
  case 7:
  console.log('Signs point to yes');
  break;
  default:
  console.log('Ooof, not looking good')
  break;
};


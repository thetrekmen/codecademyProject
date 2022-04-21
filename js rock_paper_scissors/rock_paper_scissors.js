const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
    } else {
      console.log('error');
    }
}

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}

const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === computerChoice) {
    return 'tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'computer won!';
    } else {
        return 'user won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return 'computer won!';
    } else {
        return 'user won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock'){
      return 'computer won!';
    } else {
        return 'user won!';
    }
  } 
  if (userChoice === 'bomb') {
        return 'user won!';
  }
}

const playGame = () => {
      const userChoice = getUserChoice('Paper');
        console.log('user threw: ' + userChoice);
      const computerChoice = getComputerChoice();
        console.log('computer threw: ' + computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
    }

playGame();
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 11);
}
console.log(generateTarget());

const compareGuesses = (human,computer,target) => {
    const differenceHuman = Math.abs(human - target);
    const differenceComputer = Math.abs(computer - target);
    if (differenceHuman <= differenceComputer) {
        return true;
    }   else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        return humanScore += 1;
    } else if (winner === 'computer') {
        return computerScore += 1;
    }
}

const advanceRound = () => {
        return currentRoundNumber++;
    
}

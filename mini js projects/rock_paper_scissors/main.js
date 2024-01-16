const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase()
    if(userInput ==='rock'){
        return userInput
    } else if (userInput ==='paper') {
        return userInput
    } else if (userInput ==='scissors') {
        return userInput
    } else {
        console.log('Choose rock, paper, or scissors to play.')
    }
}
getUserChoice('paper')
  
function getComputerChoice() {
    const number = Math.floor(Math.random()*3)
    if (number === 0){
        //console.log('rock')
        return 'rock'
    } else if (number === 1) {
        //console.log('paper')
        return 'paper'
    } else {
        //console.log('scissors')
        return 'scissors'
    }
}
getComputerChoice()

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'computer wins';
        } else {
            return 'user wins';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'computer wins';
        } else {
            return 'user wins';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'computer wins';
        } else {
            return 'user wins';
        }
    }
}


function playGame(){
    userChoice = getUserChoice('rooooock')
    computerChoice = getComputerChoice()
    console.log(userChoice, computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
}


playGame()

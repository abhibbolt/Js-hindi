const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('.guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []

let numGuess = 1

let playGame = true;

if (playGame) {
    sumbit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }
    else if (guess < 1) {
        alert('please enter a number moew than one')
    }
    else if (guess > 100) {
        alert('please entr a number less then 100')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayMGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayMGuess(guess)
            cheakGuess(guess)
        }
    }
}

function cheakGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guested right`)
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`)
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2> ${message} </h2>`
}

function newGame() {
 userInput.value = ''
 userInput.setAttribute('disabled','')
 p.classList.add('button')
 p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`;
 startOver.appendChild(p)
 startOver = false
 newGame()
}

function endGame() {
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){
    newGameButton = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - newGame}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    startOver = true

})

}

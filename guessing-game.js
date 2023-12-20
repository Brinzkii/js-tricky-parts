function guessingGame() {
    let target = Math.floor(Math.random()*100)
    let guesses = 0
    let gameOver = false
    return function guess(num) {
        if (gameOver === true) {
            return 'The game is over, you already won!'
        } else {
            guesses++
        }

        if (num === target) {
            gameOver = true
            return `You win! You found ${target} in ${guesses} guesses.`
        }
        else if (num > target) {
            return `${num} is too high!`
        }
        else  {
            return `${num} is too low!` 
        }
    }
}

guessingGame()

module.exports = { guessingGame };

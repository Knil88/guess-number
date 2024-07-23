document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const submitGuess = document.getElementById('submitGuess');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const restartButton = document.getElementById('restartButton');

    let secretNumber;
    let attemptsLeft;

    function startGame() {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attemptsLeft = 10;
        attemptsDisplay.textContent = `Tentativi rimasti: ${attemptsLeft}`;
        message.textContent = '';
        guessInput.value = '';
        guessInput.disabled = false;
        submitGuess.disabled = false;
        restartButton.style.display = 'none';
    }

    function handleGuess() {
        const guess = parseInt(guessInput.value, 10);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = 'Per favore inserisci un numero valido tra 1 e 100.';
            return;
        }

        attemptsLeft--;
        if (guess === secretNumber) {
            message.textContent = `Congratulazioni! Hai indovinato il numero ${secretNumber}.`;
            guessInput.disabled = true;
            submitGuess.disabled = true;
            restartButton.style.display = 'inline-block';
        } else if (attemptsLeft <= 0) {
            message.textContent = `Hai esaurito i tentativi. Il numero era ${secretNumber}.`;
            guessInput.disabled = true;
            submitGuess.disabled = true;
            restartButton.style.display = 'inline-block';
        } else {
            message.textContent = guess < secretNumber ? 'Troppo basso!' : 'Troppo alto!';
            attemptsDisplay.textContent = `Tentativi rimasti: ${attemptsLeft}`;
        }
    }

    submitGuess.addEventListener('click', handleGuess);
    restartButton.addEventListener('click', startGame);

    startGame();
});

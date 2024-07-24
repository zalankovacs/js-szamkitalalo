document.addEventListener("DOMContentLoaded", () => {
    let guessListContainer = document.querySelector('.js-guess-container');
    let currentGuessField = document.querySelector('.js-guess-field'); 
    let newGameButton = document.querySelector('.js-new-game-btn');
    let guessSubmitButton = document.querySelector('.js-submit-guess')

    let target;

    function generateTarget() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function resetGame() {
        // korábbi találgatások törlése, de az űrlap megtartása
        let guessList = document.querySelectorAll('.js-guess');
        guessList.forEach(guess => guess.remove());
        
        // input mező tartalmának törlése
        currentGuessField.value = ''; 
    }

    function startGame() {
        resetGame();
        target = generateTarget();
    }

    function submitGuess(event)
    {
        event.preventDefault();
        let guessValue = Number.parseInt(currentGuessField.value);
        console.log(guessValue, typeof guessValue);
        if(validateGuess())
        {
            alert('klikk');
        }
    }

    function addGuessValidation()
    {
        currentGuessField.classList.add('is-invalid');
    }

    function removeGuessValidation()
    {
        currentGuessField.classList.remove('is-invalid');
    }

    function validateGuess()
    {
        let guessValue = Number.parseInt(currentGuessField.value);
        currentGuessField.value = guessValue;
        if(Number.isNaN(guessValue) || guessValue < 1 || guessValue > 100)
        {
            addGuessValidation();
            return false; 
        }
            removeGuessValidation();
            return true;
    }

    startGame();
    newGameButton.addEventListener('click', (e) => {
        e.preventDefault();  // Megakadályozzuk a form submit eseményt
        startGame();
    });
    guessSubmitButton.addEventListener('click', submitGuess);
    currentGuessField.addEventListener('focus', removeGuessValidation);
    currentGuessField.addEventListener('change', validateGuess);
});

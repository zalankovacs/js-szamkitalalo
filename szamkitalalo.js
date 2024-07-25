document.addEventListener("DOMContentLoaded", () => {
    let guessListContainer = document.querySelector('.js-guess-container');
    let currentGuessField = document.querySelector('.js-guess-field'); 
    let newGameButton = document.querySelector('.js-new-game-btn');
    let guessSubmitButton = document.querySelector('.js-submit-guess');
    let guessListDisplay = document.querySelector('.js-guess-list');

    let target;
    let guessList = [];

    const guessResults = {
        KISEBB: 'kisebb',
        NAGYOBB: 'nagyobb',
        HELYES: 'talalt',
    };

    function generateTarget() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function resetGame() {
        // korábbi találgatások törlése, de az űrlap megtartása
        guessList = [];
        guessListDisplay.innerHTML = '';
        
        // input mező tartalmának törlése
        currentGuessField.value = ''; 
        removeGuessValidation();
    }

    function startGame() {
        resetGame();
        target = generateTarget();
    }

    function addGuess(guessValue, result) {
        guessList.unshift({ guessValue, result });
    }

    function compareGuessToTarget(guess) {
        if (guess < target) {
            addGuess(guess, guessResults.NAGYOBB);
        } else if (guess > target) {
            addGuess(guess, guessResults.KISEBB);
        } else {
            addGuess(guess, guessResults.HELYES);
        }
        renderGuessList();
    }

    function submitGuess(event) {
        event.preventDefault();
        let guessValue = Number.parseInt(currentGuessField.value);
        if (validateGuess()) {
            compareGuessToTarget(guessValue);
        }
    }

    function addGuessValidation() {
        currentGuessField.classList.add('is-invalid');
    }

    function removeGuessValidation() {
        currentGuessField.classList.remove('is-invalid');
    }

    function validateGuess() {
        let guessValue = Number.parseInt(currentGuessField.value);
        if (Number.isNaN(guessValue) || guessValue < 1 || guessValue > 100) {
            addGuessValidation();
            return false; 
        }
        removeGuessValidation();
        return true;
    }

    function renderGuessList() {
        let html = '';
        let guessType, guessText;

        for (let { guessValue, result } of guessList) {
            if (result === guessResults.KISEBB) {
                guessType = 'warning';
                guessText = 'a keresett szám kisebb';
            } else if (result === guessResults.NAGYOBB) {
                guessType = 'primary';
                guessText = 'a keresett szám nagyobb';
            } else {
                guessType = 'success';
                guessText = 'gratulálok eltaláltad!';
            }
            html += `
                <div class="row js-guess">
                    <div class="col col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 alert alert-${guessType}" role="alert">
                        ${guessValue} - ${guessText}
                    </div>
                </div>
            `;
        }

        guessListDisplay.innerHTML = html;
    }

    startGame();
    newGameButton.addEventListener('click', (e) => {
        e.preventDefault();  // Megakadályozzuk a form submit eseményt
        startGame();
    });
    guessSubmitButton.addEventListener('click', submitGuess);
    currentGuessField.addEventListener('input', validateGuess);
});

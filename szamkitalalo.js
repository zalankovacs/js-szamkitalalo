document.addEventListener("DOMContentLoaded", () => {
    let guessListContainer = document.querySelector('.js-guess-container');
    let currentGuessField = document.querySelector('.js-guess-field'); 
    let newGameButton = document.querySelector('.js-new-game-btn');

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
        console.log("Generated target number: " + target);  // Debugging: ellenőrizd a konzolban
    }

    startGame();
    newGameButton.addEventListener('click', (e) => {
        e.preventDefault();  // Megakadályozzuk a form submit eseményt
        startGame();
    });
});

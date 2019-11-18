// Declare variables to select the DOM elements
let input = document.getElementById('word-input');
let displayScore = document.getElementById('displayScore');
let calBtn = document.getElementById('calBtn');

// Function to calculate the score of words entered in the box
const scrabbleWord = () => {
    // Collecting the value of the word from the input box
    let inputWord = input.value;
    inputWord = inputWord.toUpperCase();
    // Storing the alphabet and their values in an object.
    alphabetScores = { A: 1, E: 1, I: 1, O: 1, U: 1, 
        L: 1, N: 1, R: 1, S: 1, T: 1, D: 2, G: 2, 
        B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4,
        W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10 
    };
    // Initializing the word score
    let sum = 0;
    // Checking if input box is empty
    if (inputWord === "") {
        displayScore.innerHTML = "Please enter a word!";
    } else {
        // Looping through the letters in the word entered in the box
        for (let i = 0; i < inputWord.length; i++) {
            sum += alphabetScores[inputWord.charAt(i)];
        }
        // Displaying the score of the words in a div
        displayScore.innerHTML = `You have ${sum} points`;
    }
  if (isNaN(sum)) {
    displayScore.innerHTML = `Please enter only letters of the alphabet`;
  }
}
// Function that fires the word score function
calBtn.addEventListener("click", scrabbleWord);
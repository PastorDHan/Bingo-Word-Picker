let wordBank = [];

let pickedWords = new Set();

document.getElementById('submit-words').addEventListener('click', function() {
  const inputVal = document.getElementById('word-input').value;
  if (inputVal) {
    wordBank = inputVal.split(',').map(word => word.trim());
    pickedWords = new Set();  // Reset the picked words
    alert('Word bank updated!');
  }
});

document.getElementById('restart-btn').addEventListener('click', function() {
  pickedWords = new Set();  // Reset the picked words
  document.getElementById('bingo-board').innerText = '';  // Clear the board
  alert('Game restarted!');
});

function pickWord() {
  if (pickedWords.size >= wordBank.length) {
    alert('All words have been picked!');
    return;
  }

  let randomIndex;
  let randomWord;
  
  const resultElement = document.getElementById('bingo-board');
  
  // Reset font size and display loading effect
  resultElement.style.fontSize = "16px";
  let counter = 0;
  let loadingInterval = setInterval(() => {
    resultElement.innerText = wordBank[counter % wordBank.length];
    counter++;
  }, 100);

  setTimeout(() => {
    clearInterval(loadingInterval); // Stop the loading effect
    
    do {
      randomIndex = Math.floor(Math.random() * wordBank.length);
      randomWord = wordBank[randomIndex];
    } while (pickedWords.has(randomWord));

    pickedWords.add(randomWord);
    
    // Capitalize the first letter and set font size to 100px
    resultElement.innerText = randomWord.charAt(0).toUpperCase() + randomWord.slice(1);
    resultElement.style.fontSize = "100px";
  }, 3000);  // Stop after 3 seconds
}

document.getElementById('pick-word-btn').addEventListener('click', pickWord);

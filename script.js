const wordBank = [
  "Nehemiah", "Jerusalem", "Prayer", "Walls", "Gates",
  "Faithful", "Sin", "Rebuild", "God", "Trust",
  "Exile", "Cyrus", "Persia", "Fast", "Leader",
  "Destroyed", "Restoration", "Protection", "Enemies", "Mercy",
  "Discouraged", "Guard", "Weapons", "Obedience", "Confess",
  "Fasting", "Stone", "Consequence", "Dependence", "Sadness",
  "Work", "Rescue", "Family", "Israel", "Task",
  "Home", "Favor", "Listen", "Repent", "Love"
];

const pickedWords = new Set();

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

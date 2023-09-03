// Your 40-word bank
const wordBank = [
    "apple", "banana", "cat", "dog", "elephant",
    "fish", "grape", "hat", "igloo", "jump",
    "kite", "lion", "mouse", "nail", "octopus",
    "pig", "queen", "rat", "snake", "tiger",
    "umbrella", "violin", "wolf", "x-ray", "yak",
    "zebra", "ant", "bat", "cow", "deer",
    "eagle", "frog", "goat", "horse", "insect",
    "jaguar", "kangaroo", "lemur", "monkey", "newt"
];

// Store picked words to avoid duplicates
const pickedWords = new Set();

// Pick a random word from the wordBank and display it
function pickWord() {
    if (pickedWords.size >= wordBank.length) {
        alert('All words have been picked!');
        return;
    }

    let randomIndex;
    let randomWord;

    do {
        randomIndex = Math.floor(Math.random() * wordBank.length);
        randomWord = wordBank[randomIndex];
    } while (pickedWords.has(randomWord));

    pickedWords.add(randomWord);

    document.getElementById('result').innerText = randomWord;
}

// Attach event listener
document.getElementById('pick-word-btn').addEventListener('click', pickWord);

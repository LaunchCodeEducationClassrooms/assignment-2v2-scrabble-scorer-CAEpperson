// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      }
    }
  }
  console.log(letterPoints);
  return letterPoints;
}
function scrabbleScore(word) {
  word = word.toLowerCase();
  let score = 0


  for (let i = 0; i < word.length; i++) {

    score = score + Number(newPointStructure[word[i]])
  }
  console.log("Score for " + word + " is " + score);
  return score;
}

function simpleScore(word) {
  word = word.toUpperCase();

  console.log("Score for " + word + " is " + word.length);
  return word.length;
}

function vowelBonusScore(word) {
  word = word.toUpperCase();
  let vowels = ["A", "E", "I", "O", "U"]
  let score = word.length

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      score += 2
    }
  }
  console.log("Score for " + word + " is " + score);
  return score;
}
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  scrabStart = input.question("Let's play some Scrabble!\n \nEnter a word to score: ");
};

let scrabStart = "";

let simpleScorer = { name: "Simple Score", description: "Each letter is worth 1 point.", scorerFunction: simpleScore }

let vowelBonusScorer = { name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt.", scorerFunction: vowelBonusScore }

let scrabbleScorer = { name: "Scrabble", description: "The traditional scoring algorithm.", scorerFunction: scrabbleScore }

const scoringAlgorithms = [simpleScorer, vowelBonusScorer, scrabbleScorer];

function scorerPrompt() {
  chooseScore = input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses Scrabble point system\nEnter 0, 1, or 2:")
  if (chooseScore === "0") {
    return scoringAlgorithms[0]
  }
  if (chooseScore === "1") {
    return scoringAlgorithms[1]
  }
  else {
    return scoringAlgorithms[2]
  }
}

function transform(object) {
  let newObject = {}
  for (key in object) {
    for (let i = 0; i < object[key].length; i++) {
      let newKey = object[key][i]
      newKey = newKey.toLowerCase()
      newObject[newKey] = Number(key)
    }
  }
  return newObject
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
  initialPrompt();
  let prompt = scorerPrompt();
  prompt.scorerFunction(scrabStart)
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScore: simpleScore,
  vowelBonusScore: vowelBonusScore,
  scrabbleScore: scrabbleScore,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};


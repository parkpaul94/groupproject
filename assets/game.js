function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomInt = Math.floor(Math.random() * (max - min)) + min;
    return randomInt;
}//The maximum is exclusive and the minimum is inclusive

function getRandGuess (min, max, array) {
    var index = getRandomInt (min, max);
    var str = array[index];

    
}

const wins = "#wincount";
const losses = "#losscount";
const wrong = "#wrong-guesses";
const blanks = "#words";
const remaining = "#guessesremaining";
const easy = "#easy";
const medium = "#medium";
const hard = "#hard";

var gameBoardArray = [];
var correctGuess = [];
var numSpaces = [];
var scores = [];
var highScore = 0;

var easy = {
    numWins = 0,
    numLosses = 0,
    cpuGuess = [],
    maxGuesses = 5,
    gameArray = ["zap", "job", "dam", "dog", "cat", "win", "get", "zip", "vex", "jog", 
                "fox", "fax", "pod", "pad", "zoo", "zit", "van", "dig", "cup", "gum", "dad", "mom",
                "lax", "joy", "tax", "bat", "rat", "did", "wax", "mix", "fix", "man", "ran", "box"],

initializeGame: function() {
    
},

playAgain: function() {

}
}





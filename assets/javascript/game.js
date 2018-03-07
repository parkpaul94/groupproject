function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomInt = Math.floor(Math.random() * (max - min)) + min;
    return randomInt;
}//The maximum is exclusive and the minimum is inclusive

function getRandGuess (min, max, array) {
    var index = getRandomInt (min, max);
    var str = array[index];
    var guessArray = [];
    for(i = 0; i < str.length; i++) {
        if (str.charAt(i) === ' ') {
            guessArray.push(' ');
        }
        else {
            guessArray.push(str.charAt(i));
        }
    }
    return guessArray;
    console.log(guessArray);
}

function createBoard (randomGuess) {
    for(i = 0; i < randomGuess.length; i++) {
        if (randomGuess[i] === ' ') {
            $(blanks).append("&nbsp;&nbsp;&nbsp;&nbsp;");
        }
        else {
            $(blanks).append("&nbsp;_&nbsp;");
        }
    }
}

function writeHTML () {
    
}

const wins = "#wincount";
const losses = "#losscount";
const wrong = "#wrongguesses";
const blanks = "#words";
const remaining = "#guessesremaining";
const easy = "#easy";
const medium = "#medium";
const hard = "#hard";
const clear = "#clear";

var gameBoardArray = [];
var correctGuess = [];
var numSpaces = [];
var scores = [];
var highScore = 0;

var easyGame = {
    numWins: 0,
    numLosses: 0,
    cpuGuess: [],
    maxGuesses: 5,
    gameArray: ["zap", "job", "dam", "dog", "cat", "win", "get", "zip", "vex", "jog", 
                "fox", "fax", "pod", "pad", "zoo", "zit", "van", "dig", "cup", "gum", "dad", "mom",
                "lax", "joy", "tax", "bat", "rat", "did", "wax", "mix", "fix", "man", "ran", "box"],

initializeGame: function() {
    $(wins).text();
    $(losses).text();
    $(wrong).text();
    $(blanks).text();
    $(remaining).text();
    this.cpuGuess = getRandGuess(0, this.gameArray.length, this.gameArray);
    createBoard(this.cpuGuess);
    console.log(this.cpuGuess);
},

playAgain: function() {
    $(wrong).text("none");
    $(blanks).text(0);
    $(remaining).text(0);
}
};

$(document).ready(function() {
    $(easy).click(function() {
        easyGame.initializeGame();
        document.onkeyup = function(event) {

        }
        
})
$(clear).click(function() {
            $(wrong).empty();
            $(blanks).empty();
            $(remaining).empty();
            })
});
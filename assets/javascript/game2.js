const wins = "#wincount";
const losses = "#losscount";
const wrong = "#wrongguesses";
const blanks = "#words";
const remaining = "#guessesremaining";
const easy = "#easy";
const medium = "#medium";
const hard = "#hard";
const clear = "#clear";

var docdashes = $('#words')[0]
var doccorrectGuess = $('#wrongguesses')[0]
var docwrongGuess = $('#wrongguesses')[0]
// var docdashes = document.getElementById('words');
// var doccorrectGuess = document.getElementsByClassName('wrongguesses');
// var docwrongGuess = document.getElementsByClassName('wrongguesses');
var correctGuess = [];
var wrongGuess = [];
var numSpaces = [];
var scores = [];
var highScore = 0;
// var dashes = [];

var easyGame = {
    numWins: 0,
    numLosses: 0,
    randomWord: [],
    maxGuesses: 5,
    dashes: [],
    wordBank: ["zap", "job", "dam", "dog", "cat", "win", "get", "zip", "vex", "jog", 
                "fox", "fax", "pod", "pad", "zoo", "zit", "van", "dig", "cup", "gum", "dad", "mom",
                "lax", "joy", "tax", "bat", "rat", "did", "wax", "mix", "fix", "man", "ran", "box"],

GenerateDashes: function() {
    for (var i = 0; i < this.randomWord.length; i++) {
        this.dashes.push('_');
    }
    return this.dashes;
},

initializeGame: function() {
    this.randomWord = easyGame.wordBank[Math.floor(Math.random()*this.wordBank.length)];
    $(blanks).html();
    $(blanks).html(this.GenerateDashes().join(' '));
    $(wins).text();
    $(losses).text();
    $(wrong).text();
    $(remaining).text();
    // this.lettersInWord = this.randomWord.split('');  
    console.log(this.randomWord);
    console.log(blanks);

    
},
playAgain: function() {
    $(wrong).text();
    $(blanks).text();
    $(remaining).text();
}
};

$(document).ready(function() {
    $(easy).click(function() {
        easyGame.initializeGame();
        document.onkeyup = function(event) {
            var keyword = String.fromCharCode(event.keyCode);
            var key = event.key;

            if (correctGuess.indexOf(' ' + key) !== -1) {
                return false;
            }
        
            if (wrongGuess.indexOf(' ' + key) !== -1) {
                return false;
            }
            
            if (easyGame.randomWord.indexOf(keyword) > -1) {
                $(wrong).append(' ' + keyword);
                $(wrong)[0].html(correctGuess);
                

                // correctGuess.append(' ' + keyword);
                // dashes[randomWord.indexOf(keyword)] = keyword;
                $('#words')[0].innerHTML = dashes.join(' ');
                $(correctGuess)[0].innerHTML = correctGuess;
        
                if (dashes.join('') === randomWord) {
                    // alert('You Win!');
                    return newGame();
                }
            }
            
            else {
                $(wrong).append(' ' + keyword);
                $(this.wrong)[0].append(wrongGuess);
                // docwletters[0].innerHTML = wletters;
                guessesLeft--;
                if (guessesLeft == 0) {
                    // alert('You Lose!');
                    return newGame();   
                }
            }
            document.querySelector('.guessesremaining').innerHTML = guessesLeft;
        }

        });
$(clear).click(function() {
    $(blanks).empty();
    $(wrong).empty();
    $(remaining).empty();
    $(docdashes).empty();

    })
});
// docdashes[0].innerHTML = GenerateDashes().join(' ');

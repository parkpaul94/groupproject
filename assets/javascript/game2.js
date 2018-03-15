//Counter
var time = 0;
var wCount = 0;
var wCount = 0;
var QNumber = 1;
var timer = '';
var QandA = {
			1:{
				question:'Which character wears a red hat with a M on it?',
				answers:['mario','luigi','wario','donkey kong'],
				correct:'mario',
				right: 'Correct!',
				wrong: 'Wrong!',
				imageUrl:'assets/images/mario.gif'
			   },
			2:{
				question:'Which is not a nintendo character?',
				answers:['peach','luigi','wario','waldo'],
				correct:'waldo',
				right: 'Correct!',
				wrong: 'Wrong!',
				imageUrl:'assets/images/waldo.gif'
			},
			3:{
				question:'What was the first nintendo console created?',
				answers:['Super NES','SNESS','gamecube','nintendo 64'],
				correct:'Super NES',
				right: 'Correct!',
				wrong: 'Wrong!',
				imageUrl:'assets/images/nes.gif'
			}

	};
/*Functions
==============================================================*/
var start = function() { 
	//When buttons is clicked clear triviabox
	$('.startbutton').click(function() {
		//Emptys trivia section
        $('.triviabox').empty();
        $('.introfont').empty();
        $('.namefont').empty();
        $('img').remove();
        $('.mainboxfont').append('Trivia Game');
        
        // $('.mainboxfont').empty();
		createQuestions();
	});
}
var createQuestions = function() {
	timerStart();
	//Get question
	var question = QandA[QNumber]['question'];
	//assign div element to newDiv
	var newDiv = $('<div>');
	//Add a class to newDIv
	newDiv.addClass('question');
	//Add text to question
	newDiv.text(question);
	//Add question to DOM
	$('.triviabox').append(newDiv);
	createAnswers();
}
var createAnswers = function() {
	var answerLength = QandA[QNumber]['answers'].length;
	for(var i = 0; i < answerLength;i++) {
		//get answers
		var answers = QandA[QNumber]['answers'][i];
		//Create new div to hold answers
		var newBtn = $('<button>');
		//Add class to new Div
		newBtn.addClass('answers ansbtn');
		//Give buttons attribute
		newBtn.attr('data-type',answers);
		//add text to new Div
		newBtn.text(answers);
		//Add answers to DOM
		$('.triviabox').append(newBtn);
	}
	//Prevents click event from being saved
	$(document).off('click','.answers',checkAnswer);
	$(document).on('click','.answers',checkAnswer);
}
var checkAnswer = function() {
	 //Get users answer choice
	var userAnswer = $(this).data('type');
	var correctAnswer = QandA[QNumber]['correct'];
	var correctImg = QandA[QNumber]['imageUrl'];

	var right = QandA[QNumber]['right'];
	var wrong = QandA[QNumber]['wrong'];
	console.log(QNumber);
	if(userAnswer === correctAnswer) {
        $('.timerSection').empty();
		//Update wCount
		wCount++;
		//Clears out triv Section
		$('.triviabox').empty();
        var newImg = $('<img>');
        newImg.addClass('size');
		newImg.attr('src',correctImg);
		$('.triviabox').append(newImg);
		//Create Div
		var newDiv = $('<div>');
		//Give div class
		newDiv.addClass('rightAnswer');
		//adds CORRECT! text to div
		newDiv.text(right);
		//Add answer to DOM
		$('.triviabox').append(newDiv);
		//Stops Time
		clearInterval(timer)
		//Add 1 to question count to move to the next question
		QNumber++;
		if(QNumber <= 3) {
			//removes CORRECT! text and continues to create next question after 3 seconds
			setTimeout(
				function() {
					$('.triviabox').empty();
					createQuestions();
					},3500);
		}
		else{
			$('.triviabox').empty();
            var newImg = $('<img>');
            newImg.addClass('size');
			newImg.attr('src',correctImg);
			$('.triviabox').append(newImg);
			//Create Div
			var newDiv = $('<div>');
			//Give div class
			newDiv.addClass('rightAnswer');
			//adds CORRECT! text to div
			newDiv.text(right);
			//Add answer to DOM
			$('.triviabox').append(newDiv);
			//Stops Time
			clearInterval(timer)
			//Reset
			setTimeout(gameOver, 3500);
		}
	}
	else{
        $('.timerSection').empty();
		wCount++;
		//Clears out triv Section
		$('.triviabox').empty();
        var newImg = $('<img>');
        newImg.addClass('size');
		newImg.attr('src',correctImg);
		$('.triviabox').append(newImg);
		var newDiv = $('<div>');
		//Give div class
		newDiv.addClass('wrongAnswer');
		//adds Wrong! text to div
		newDiv.text(wrong);
		//Add answer to DOM
		$('.triviabox').append(newDiv);
		//Stops Time
		clearInterval(timer)
		//Add 1 to question count to move to the next question
		QNumber++;
		
		if(QNumber <= 3) {
			setTimeout(function() {
			$('.triviabox').empty();
			createQuestions();
			},3500);
		}
		else{
			//Clears out triv Section
			$('.triviabox').empty();
			var newImg = $('<img>');
		newImg.attr('src',correctImg);
		$('.triviabox').append(newImg);
			var newDiv = $('<div>');
			//Give div class
			newDiv.addClass('wrongAnswer');
			//adds Wrong! text to div
			newDiv.text(wrong);
			//Add answer to DOM
			$('.triviabox').append(newDiv);
			//Stops Time
			clearInterval(timer);
			//Reset
			setTimeout(gameOver, 3500);
		}
	}
}
//Timer
//==========================================
var timerStart = function() { 
	$('.timerSection').empty();
	//Sets time to 10
	trivTime = 100;
	//Progress Bar
	var timeTag = $('<div>');
	timeTag.addClass('time');
	timeTag.addClass('progress');
	var progressBar = $('<div>');
    progressBar.addClass('progress-bar progress-bar-striped progress-bar-color');
	progressBar.width(trivTime + '%');

	$('.timerSection').append(timeTag);
	$('.time').append(progressBar);	
	//Decrements Time
	timer = setInterval(timeDecrement,100);
}
var timeDecrement = function() { 
	//Progress bar decrement
	$('.progress-bar').width(trivTime + '%');
	trivTime--;
	//if time gets to 0
	if(trivTime === -10) {
		userAnswer = false;
		//Clears Time
		clearInterval(timer);
		checkAnswer();
	}
	
}
var gameOver = function() {
	//Remove everything in trivia section
	$('.triviabox').empty();
	//Remove everthing in timer section
	$('.timerSection').empty();
	var scoreDiv = $('<div>');
	scoreDiv.addClass('score');
	scoreDiv.html('Correct: ' + wCount + '<br>' + 'Wrong: ' + wCount);
	$('.triviabox').append(scoreDiv);
	//Assign new div element to new Div
	var newDiv = $('<div>');
	//add class to new Div
	newDiv.addClass('gameOver');
	//add game over text
	newDiv.text('Game Over! Play Again ?');
	//Append game over text to DOM
	$('.triviabox').append(newDiv);
	//Create ResetButton
	var newBtn = $('<button>');
	//Give btn Class
	newBtn.addClass('ansbtn resetBtn');
	//Give btn reset Text
	newBtn.text('Reset');
	//Append
	$('.triviabox').append(newBtn);
	//Reset all value
	trivTime = 100;
	QNumber = 1;
	wCount = 0;
	wCount = 0;
	//When reset button is clicked.......
	$('.resetBtn').on('click',function() {
		$('.triviabox').empty()
		//Starts game over
		createQuestions();
	});
}

/*Main
==============================================================*/
start();
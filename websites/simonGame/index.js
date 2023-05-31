//alert("pogtest");

var buttonColors = ["red", "yellow", "blue", "green"];
var currentSeq = [];
var userClickedSeq = [];

var startedGame = false;

var level = 0;

//starts a game
$(document).keypress(function(event){
	if (!startedGame){
		$("h1").html("Level " + level);
		nextSequence();
		startedGame = true;
	}
});

//detects when the button is pressed
$("button").click(function(){
	//id is an attr, so this can get id. 
	var userChosenColor =  $(this).attr("id");
	userClickedSeq.push(userChosenColor);
	playSound(userChosenColor);
	buttonPressed(userChosenColor);
	//console.log(userClickedSeq);

	checkAnswer(userClickedSeq.length-1);

});

//calls a next sequence
function nextSequence(){

	level++;
	$("h1").html("Level " + level);
	
	//chooses a square
	var nextSquare = Math.floor(Math.random() * 4 ); //no plus one here, this is 0 indexed
	
	//console.log(nextSquare);

	//stores the color for use in later functions
	var nextColor = buttonColors[nextSquare];

	//adds it to the sequence
	currentSeq.push(nextColor);
	console.log(currentSeq);

	//flashes the next button
	flash(nextColor);

	//plays the sound of the color
	playSound(nextColor);



}

//fade in and out animation
function flash(element){

	//removed extra fade out and in as it was confusing
	$("." + element).fadeOut().fadeIn();
}

function playSound(filepath){
	var soundEffect = new Audio("sounds/" + filepath + ".mp3");
	soundEffect.play();
}

function buttonPressed(currentColor){
	$("#" + currentColor).addClass("pressed");
	setTimeout(function(){
		$("#" + currentColor).removeClass("pressed");
	}, 100);
}

function checkAnswer(currentLevel){

	if (userClickedSeq[currentLevel] === currentSeq[currentLevel]){
		console.log("true");

		if(userClickedSeq.length === currentSeq.length){

			setTimeout(function(){
				nextSequence();
				userClickedSeq = [];
			}, 1000);


		}


	}
	else{

		$("body").addClass("game-over");
		playSound("wrong");

		setTimeout(function(){
			$("body").removeClass("game-over");
		}, 200);

		$("h1").html("Restart? Press Any Key");

		restartGame();
	}


}

function restartGame(){
	//resets all vars
	level = 0;
	currentSeq = [];
	userClickedSeq = [];
	startedGame = false;
}

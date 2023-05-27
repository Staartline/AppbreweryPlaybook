
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
}


function playSound(){
	crash.play();

	//checks for which button was pressed, or a class associated with the button first?
	//plays sound at some letter(buttonpressed.)
}

//audio Sounds
var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');

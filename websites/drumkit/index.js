
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", function (){
		//this.style = "color:white";
		var buttonVal = this.innerHTML;
		
		switch (buttonVal){
			case "w":
				tom1.play();
				break;
			case "a":
				tom2.play();
				break;
			case "s":
				tom3.play();
				break;
			case "d":
				tom4.play();
				break;
			case "j":
				crash.play();
				break;
			case "k":
				kickBass.play();
				break;
			case "l":
				snare.play();
				break;
			}
	});
}
//we can add this to the whole document
	document.addEventListener("keydown", function (e){
		//reading furthere here: https://stackoverflow.com/questions/12689995/get-key-value-of-a-key-pressed
		var keySound = (e.key);
			switch (keySound){
			case "w":
				tom1.play();
				break;
			case "a":
				tom2.play();
				break;
			case "s":
				tom3.play();
				break;
			case "d":
				tom4.play();
				break;
			case "j":
				crash.play();
				break;
			case "k":
				kickBass.play();
				break;
			case "l":
				snare.play();
				break;
			}
	});


//audio constructor
function AudioInit(filepath){
	this.filePath = filepath;
	this.play = function(){
		var soundByte = new Audio(filepath);
		soundByte.play();
	}
}


// function playSound(){
// 	crash.play();

// 	//checks for which button was pressed, or a class associated with the button first?
// 	//plays sound at some letter(buttonpressed.)
// }


//audio Sounds
var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');

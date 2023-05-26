
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
	console.log(i);
}


function playSound(){
	alert("clicked");

	//checks for which button was pressed, or a class associated with the button first?
	//plays sound at some letter(buttonpressed.)
}


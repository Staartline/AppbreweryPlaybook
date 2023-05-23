// function randomRoll(){
// 	var rollResult = Math.floor(Math.random() * 6) + 1;
// 	console.log('dice' + rollResult + '.png');
// 	return 'images/dice' + rollResult + '.png';
// }

// function placeRollLeft(){
// 	document.querySelector(".p1").setAttribute("src", randomRoll());

// }

// function placeRollRight(){
// 	document.querySelector(".p2").setAttribute("src", randomRoll());
// }

function randomRoll(){
	var rollResult = Math.floor(Math.random() * 6) + 1;
	return rollResult;
}

function placeRollLeft(rollVal){
	var filePath = 'images/dice' + rollVal + '.png'
	document.querySelector(".p1").setAttribute("src", filePath);

}

function placeRollRight(rollVal){
	var filePath = 'images/dice' + rollVal + '.png'
	document.querySelector(".p2").setAttribute("src", filePath);
}

function placeBothRolls(){
	var lRoll = randomRoll();
	var rRoll = randomRoll();

	placeRollLeft(lRoll);
	placeRollRight(rRoll);

	if (lRoll === rRoll){
		document.querySelector("h1").innerHTML = "Players! TIE!";
	}
	else if (lRoll > rRoll){
		document.querySelector("h1").innerHTML = "Player 1... WIN!";
	}
	else{
		document.querySelector("h1").innerHTML = "Player 2... WIN!";
	}
}
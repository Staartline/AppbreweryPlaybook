
function HouseKeeper(name, age, taskList){
	this.name = name;
	this.age = age;
	this.taskList = taskList;
	this.dialogue = function () {
		alert(name + " asked: Would you like me to clean that?");
	}
}


var Sara = new HouseKeeper("Sara", 24, ["Washing Dishes", "Mopping Floors"]);
var Joe = new HouseKeeper("Joe", 25, ["Boogy"]);


alert(Sara.dialogue());
alert(Joe.name + " is "+ Joe.taskList);
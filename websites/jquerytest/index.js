$(document).keypress(function(event){
	$("h1").html(event.key);
});

$("h1").on("mouseover", function(){
	$("h1").css("color", "purple");
});
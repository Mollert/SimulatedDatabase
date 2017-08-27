
$("#nwFunder").on("click", function(event) {
//	event.preventDefault();
	var person = $("#funder").val();
	confirm("You are about to add " + person + " as a Funder.");
});

$("#newContro").on("click", function(event) {
//	event.preventDefault();
	var amount = $("#giveAmount").val();
	var project = $("#giveProject").val();
	confirm("You are about to contribute $" + amount + " to project " + project + ".");
});
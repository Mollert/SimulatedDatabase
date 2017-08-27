
var express = require("express");
var request = require('request')
var router = express.Router();

var fakeProjects = require("../seed/fakeProjects.js");
var fakeFunders = require("../seed/fakeFunders.js");

router.get("/", function(req, res) {
	res.render("index");
// 	console.log("Made the main page get");
});

router.get("/projects", function(req, res) {
//	console.log(fakeProjects);
	res.render("index", {fakeProjects});
// 	console.log("Made the project page get");
});

router.post("/projectAmount", function(req, res) {
	var am = req.body.project_title;
	for ( i=0 ; i<fakeProjects.length ; i++ ) {
		if (fakeProjects[i].project_title === am) {
			var amount = fakeProjects[i].funding;
		}
	}
//	console.log(am);
//	console.log(amount);
	res.render("index", {am, amount});
// 		console.log("Made the projectAmount page get");
});

router.post("/contribute", function(req, res) {
	var pro = req.body.project_title;
	var con = req.body.funding;
//	console.log(pro + "  " + con);
	for ( i=0 ; i<fakeProjects.length ; i++ ) {
		if (fakeProjects[i].project_title === pro) {
			fakeProjects[i].funding = parseFloat(fakeProjects[i].funding) + parseFloat(con);
		}
	}
	res.render("index", {fakeProjects});
});

router.get("/funders", function(req, res) {
//	console.log(fakeFunders);
	res.render("index", {fakeFunders});
// 	console.log("Made the funders page get");
});

router.post("/addFunder", function(req, res) {
	var nm = req.body.funder;
	fakeFunders.push({funder:nm});
	res.render("index", {fakeFunders, nm});
});

module.exports = router;
const path = require("path");
const first = require("./numberOfMatchesPerYear.js");
const second = require("./matchesWonYearly.js");
const ids = require("./idArray.js");
const third = require("./extraRun.js");
const fourth = require("./economical.js");



function matchesPerSeason(){
	let dataSet = path.resolve("matches.csv"); //path to file in currentr system
	first.getMatchesPerYear(dataSet).then(function(data){
	    let arr1 =  Object.keys(data);
	    let arr2 = [];
	    arr1.map(function(key){ arr2.push(data[key]);});//console.log(arr2);
	    let combinedArr = {};
	    combinedArr.seasons = arr1;
	    combinedArr.matches = arr2;
	    console.log("first answer", combinedArr)
	})

}

matchesPerSeason();

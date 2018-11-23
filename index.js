const path = require("path");
const first = require("./numberOfMatchesPerYear.js");
const match_Id = require("./ArrayOfId.js");
const third = require("./extraRun.js");



function matchesPerSeason() {
    let dataSet = path.resolve("matches.csv"); //path to file in currentr system
    first.getMatchesPerYear(dataSet).then(function(data) {
        let arr1 = Object.keys(data);
        let arr2 = [];
        arr1.map(function(key) {
            arr2.push(data[key]);
        }); //console.log(arr2);
        let combinedArr = {};
        combinedArr.seasons = arr1;
        combinedArr.matches = arr2;
        console.log("first answer", combinedArr)
    })

}


function extrasPerTeam(){
	let dataSet = path.resolve("deliveries.csv");
    let matchData = path.resolve("matches.csv")
    match_Id.matchIDs(matchData, 2016).then(function(data){
    	let matchIDArray = data;
        third.extraRunsPerTeam(dataSet, matchIDArray).then(function(d){
            let arr1 =  Object.keys(d);
		    let arr2 = [];
		    arr1.map(function(key){ arr2.push(d[key]);});//console.log(arr2);
		    let combinedArr = {};
		    combinedArr.teams = arr1;
		    combinedArr.runs = arr2;
		    console.log("third answer", combinedArr)
        })
    })

}

matchesPerSeason();
extrasPerTeam();
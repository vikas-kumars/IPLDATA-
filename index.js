let path = require("path"); //tells directory where this file is
let first = require("./numberOfMatchesPerYear.js");
let csvToJson = require('convert-csv-to-json');
let match_Id = require("./ArrayOfId.js");
let third = require("./extraRun.js");
let fourth = require("./economical.js");
let second = require('./matchesWonYearly.js')



function matchesPerSeason() {
    let dataSet = path.resolve("matches.csv"); //path to file in currentr system
    first.getMatchesPerYear(dataSet).then(function(data) {
        let arr1 = Object.keys(data);
        let arr2 = [];
        arr1.map(function(key) {
            arr2.push(data[key]);
        });
        let final_Arr = {};
        final_Arr.seasons = arr1;
        final_Arr.matches = arr2;
        console.log("first answer", final_Arr)
    })

}


function extrasPerTeam() {
    let dataSet = path.resolve("deliveries.csv");
    let matchData = path.resolve("matches.csv")
    match_Id.matchIDs(matchData, 2016).then(function(data) {
        let matchIDArray = data;
        third.extraRunsPerTeam(dataSet, matchIDArray).then(function(d) {
            let arr1 = Object.keys(d);
            let arr2 = [];
            arr1.map(function(key) {
                arr2.push(d[key]);
            }); //console.log(arr2);
            let final_Arr = {};
            final_Arr.teams = arr1;
            final_Arr.runs = arr2;
            console.log("third answer", final_Arr)
        })
    })

}


function economy_Bolwer() {
    let dataSet = path.resolve("deliveries.csv");
    let matchData = path.resolve("matches.csv")
    match_Id.matchIDs(matchData, 2015).then(function(data) {
        let matchIDArray = data;
        fourth.getEconomicalBowlers(dataSet, matchIDArray).then(function(d) {
            let arr1 = Object.keys(d);
            let arr2 = [];
            arr1.map(function(key) {
                arr2.push(d[key]);
            }); //console.log(arr2);
            let final_Arr = {};
            final_Arr.bowler = arr1;
            final_Arr.economy = arr2;
            console.log("fourth answer", final_Arr)
        })
    })
}

let iplData = csvToJson.fieldDelimiter(',').getJsonFromCsv('matches.csv');

function matchesWonYear(data) {
	let num_wins=second.matchesWonYearly(data);
	console.log("second answer",num_wins);
}

matchesPerSeason();
extrasPerTeam();
economy_Bolwer();
matchesWonYear(iplData);
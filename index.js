let csvToJson = require('convert-csv-to-json');
let iplData=csvToJson.fieldDelimiter(',') .getJsonFromCsv('matches.csv');
//console.log(iplData);
let seasonArr=[];
	for(let i=0;i<iplData.length;i++){
		seasonArr.push(iplData[i].season);
	}
	seasonArr.sort();
let returnMatches={};


let winArr=[];
	for(let i=0;i<iplData.length;i++){
		winArr.push(iplData[i].winner);
	}
	winArr.sort();
Let returnWins={};

//let seasonArr
//console.log(seasonArr);


function matchPerYear(data){
	
//console.log(seasonArr);


var current = null;
    var cnt = 0;
    for (var i = 0; i < seasonArr.length; i++) {
        if (seasonArr[i] != current) {
            if (cnt > 0) {
               // console.log(current + ' comes --> ' + cnt + ' times');
                returnMatches[current]=cnt;
            }
            current = seasonArr[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        //console.log(current + ' comes --> ' + cnt + ' times');
        returnMatches[current]=cnt;
    }
    console.log(returnMatches);
}


function matchesWonYearly(data){
for(let i=seasonArr[0];i<=seasonArr[seasonArr.length-1];i++){
	//console.log(i);
	if()
}	
}


matchPerYear(seasonArr);
matchesWonYearly(iplData);



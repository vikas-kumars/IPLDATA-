const csv = require("fast-csv");

function extraRunsPerTeam(matchesFile, idArray){
    return new Promise(function(resolve, reject){
        let counter = 0;
        let xtraRunsAll = {};
        csv.fromPath(matchesFile)
                .on("data", function(delivery){
                    let matchID = parseInt(delivery[0]);
                    let xtraRuns = parseInt(delivery[16]);
                    let bowlingTeam = delivery[3];
                    if(counter){
                        if(idArray.includes(matchID)){
                            if(!xtraRunsAll.hasOwnProperty(bowlingTeam)){
                                xtraRunsAll[bowlingTeam] = xtraRuns;
                            }else{
                                xtraRunsAll[bowlingTeam] += xtraRuns;
                            }
                        }
                    }
                    counter++;
                })
                .on("end", function(){
                    resolve(xtraRunsAll);
                })
    })
}

module.exports = {
    extraRunsPerTeam: extraRunsPerTeam
}

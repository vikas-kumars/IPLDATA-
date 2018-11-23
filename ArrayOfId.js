const csv = require("fast-csv");

function matchIDs(csvFile, year){
    return new Promise(function(resolve, reject){
        let IDArray = [];
        csv.fromPath(csvFile)
                .on("data", function(match){
                    let season = match[1];
                    let id = match[0];
                    if(parseInt(season) === parseInt(year)){
                        IDArray.push(parseInt(id));
                    }
                })
                .on("end", function(){
                    resolve(IDArray);
                })
    })
}

module.exports = {
    matchIDs: matchIDs
}

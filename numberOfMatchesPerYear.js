const csv = require("fast-csv");

function getMatchesPerYear(matchesFile){
    return new Promise(function(resolve, reject){
        let counter = 0;
        let matchesPerSeason = {};
        csv.fromPath(matchesFile)
                .on("data", function(match){
                    let season = match[1];
                    if(counter){
                        matchesPerSeason[season] = !matchesPerSeason.hasOwnProperty(season) ? 1 : matchesPerSeason[season] + 1;
                    }
                    counter++;
                })
                .on("end", function(){
                   resolve(matchesPerSeason);
                });
    })
    //console.log(matchesPerSeason);
}



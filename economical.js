const csv = require("fast-csv");

function getEconomicalBowlers(deliveriesFile, matchIDArray){
    return new Promise(function(resolve, reject){
        let runsEachBowler = {}
        let ballsBowled = {};
        let bowlerEconomy = {};
        let economicBowlers = {};
        csv.fromPath(deliveriesFile)
                .on("data", function(delivery){
                    let matchID = parseInt(delivery[0]);
                    let bowler = delivery[8];
                    let wideBallRun = parseInt(delivery[10]);
                    let noBallRun = parseInt(delivery[13]);
                    let batsmanRun = parseInt(delivery[15]);


                    if(matchIDArray.includes(matchID)){
                        if(!runsEachBowler[bowler]){
                            runsEachBowler[bowler] = wideBallRun + noBallRun + batsmanRun;
                            if(!wideBallRun && !noBallRun){
                                ballsBowled[bowler] = 1;
                            }
                        }else{
                            runsEachBowler[bowler] += wideBallRun + noBallRun + batsmanRun;
                            if(!wideBallRun && !noBallRun){
                                if(ballsBowled[bowler]){
                                    ballsBowled[bowler]++;
                                }else{
                                    ballsBowled[bowler] = 1;
                                }
                            }
                        }
                    }
                })
                .on("end", function(){
                    for(let key in runsEachBowler){
                        bowlerEconomy[key] = parseFloat((runsEachBowler[key]/ballsBowled[key]*6).toFixed(2));
                    }
                    let sortedArray
                    sortedArray = Object.keys(bowlerEconomy).sort(function(a,b){return bowlerEconomy[a] - bowlerEconomy[b]});
                    sortedArray.map(function(key, index){
                        if(index > 9){return true;}
                        economicBowlers[key] = bowlerEconomy[key];
                    })
                    resolve(economicBowlers);
                })
    })
}

module.exports = {
    getEconomicalBowlers: getEconomicalBowlers
}

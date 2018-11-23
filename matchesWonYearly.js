let csvToJson = require('convert-csv-to-json');
let iplData = csvToJson.fieldDelimiter(',').getJsonFromCsv('matches.csv');
let returnWins = {};

function matchesWonYearly(data) {
    let obj = {};
    let count = 1;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].season == data[i + 1].season) {
            if (obj.hasOwnProperty(data[i].winner)) {
                obj[data[i].winner]++;
            } else {
                obj[data[i].winner] = count;
            }
        } else {
            if (obj.hasOwnProperty(data[i].winner)) {
                obj[data[i].winner]++;
            } else {
                obj[data[i].winner] = count;
            }
            returnWins[data[i].season] = obj;
            count = 1;
            obj = {};
        }
    }

    return returnWins;
}


module.exports = {
    matchesWonYearly: matchesWonYearly
}
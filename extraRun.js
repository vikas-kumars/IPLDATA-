var fs = require('fs'); 
var matches = fs.readFileSync('matches.csv','utf8');
var deliveries=fs.readFileSync('deliveries.csv','utf8');
function extraRuns(matches,deliveries){
var matchesdata=[];
let detail=matches.split('\n');
for(let i=0;i<detail.length;i++){
  if(detail[i].includes(2016)){
    matchesdata.push(detail[i]);
  }
}
//console.log(matchesdata);
var uniqueID=[];
for(let id in matchesdata){
  let line=matchesdata[id].split(',');
  uniqueID.push(line[0]);
}
//console.log(uniqueID);
let eachLine=deliveries.split("\n");
let delvData=[];
for ( let i=0;i<eachLine.length;i++){
  let splitEachLine=eachLine[i].split(",");
  //console.log(splitEachLine);
  let x=parseInt(splitEachLine[0]);
  //console.log(x>=parseInt(uniqueID[0])&& x<=parseInt(uniqueID[uniqueID.length-1]));
  if(x>=parseInt(uniqueID[0])&& x<=parseInt(uniqueID[uniqueID.length-1])){
    delvData.push(eachLine[i]);}
}
let splitDelv=[];
for(let i=0;i<delvData.length;i++){
   splitDelv[i]=delvData[i].split(",");
}
//console.log(splitDelv);


//console.log(splitDelv[0][3]);

//console.log(delvData);
let obj={}

for(let i=0;i<uniqueID.length;i++){
  for(j=0;j<splitDelv.length;j++){
    if(uniqueID[i]===splitDelv[j][0]){
      if(obj.hasOwnProperty(splitDelv[j][3])){
        obj[splitDelv[j][3]]=obj[splitDelv[j][3]]+parseInt(splitDelv[j][16]);
      }else{
        obj[splitDelv[j][3]]=parseInt(splitDelv[j][16]);
      }
      }
      
    }
  }
  console.log(obj)

}
//console.log(obj);
extraRuns(matches,deliveries);



  







var fs = require('fs'); 
var matches = fs.readFileSync('matches.csv','utf8');
var deliveries=fs.readFileSync('deliveries.csv','utf8');

var matchesdata=[];
let detail=matches.split('\n');
for(let i=0;i<detail.length;i++){
  if(detail[i].includes(2015)){
    matchesdata.push(detail[i]);
  }
}

var uniqueID=[];
for(let id in matchesdata){
  let line=matchesdata[id].split(',');
  uniqueID.push(line[0]);
}


let eachLine=deliveries.split("\n");
let delvData=[];
for ( let i=0;i<eachLine.length;i++){
  let splitEachLine=eachLine[i].split(",");
  let x=parseInt(splitEachLine[0]); 
  if(x>=parseInt(uniqueID[0])&& x<=parseInt(uniqueID[uniqueID.length-1])){
    delvData.push(eachLine[i]);}
}

let splitDelv=[];
for(let i=0;i<delvData.length;i++){
   splitDelv[i]=delvData[i].split(",");
}
//console.log(splitDelv);

let obj1={};

for(let i=0;i<uniqueID.length;i++){

  for(j=0;j<splitDelv.length;j++){
    if(uniqueID[i]===splitDelv[j][0]){
      if(obj1.hasOwnProperty(splitDelv[j][8])){
        obj1[splitDelv[j][8]]=obj1[splitDelv[j][8]]+parseInt(splitDelv[j][17]); 

      }else{
        obj1[splitDelv[j][8]]=parseInt(splitDelv[j][17]);   
      }
      }
  }
}

let obj2={};
count=1;


  for(j=0;j<splitDelv.length-1;j++){

    	if(splitDelv[j][8]===splitDelv[j+1][8]){
    	      if(obj2.hasOwnProperty(splitDelv[j][8])){
    	        obj2[splitDelv[j][8]]++; 
    	
    	      }else{
    	        obj2[splitDelv[j][8]]=count;  
    	     
    	      }}
    	      else{
    	      		  if(obj2.hasOwnProperty(splitDelv[j][8])){
    	        obj2[splitDelv[j][8]]++; 
    	
    	      }else{
    	        obj2[splitDelv[j][8]]=count;  
    	        
    	      }
    	      }
      }
  

 

console.log(obj1);
console.log(obj2);
//console.log(obj);




// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  
var cur={};
  
if(currency>10000){
  
return {error: "You are rich, my friend! We don't have so much coins for exchange"};
}else{  

var coins=[50,25,10,5,1];
var coinsNames=["H","Q","D","N","P"];

for(i=0; i<coins.length; i++){
  if(currency>=coins[i]){
    cur[coinsNames[i]]=0;
    while(currency>=coins[i]){
     currency=currency-coins[i];
     cur[coinsNames[i]]++;
    }
}
}  
} 
return cur; 
}

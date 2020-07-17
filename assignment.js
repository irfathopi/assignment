// problem 1
function feetToMile(feet){
    var mile = feet/5280;               // 5280 feet = 1 mile
    return mile;
}
var yourFeetAmount = feetToMile(50000);
yourFeetAmount = yourFeetAmount.toFixed(6);
console.log(yourFeetAmount, 'Mile')




// problem 2
 function woodCalculator(chair, table, bed){
    var quebecFeetForChair = chair * 1;
    var quebecFeetForTable = table * 2;
    var quebecFeetForbed   = bed * 5;
    var totalQuebec = quebecFeetForChair + quebecFeetForTable + quebecFeetForbed;
    return totalQuebec; 
 }
 var totalQuebecYouNeed =  woodCalculator(12,4,3);
 console.log(totalQuebecYouNeed, 'Quebec Feet');


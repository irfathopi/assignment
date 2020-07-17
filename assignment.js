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


// problem 3
function brickCalculator(){
    
    oneToTen = 15 * 1000;
    elevenToTwenty = 12 * 1000;
    extra = 10 * 1000;

    if ( oneToTen){
        console.log(oneToTen)
    }
    else if (elevenToTwenty){
        console.log(elevenToTwenty);
    }
        else{
            console.log(extra);
        } 
    
}





//  problem 4
function tinyFriend(names){
    var tinyName = names[0];
    for(var i = 0; i < names.length; i++){
        var currentName = names[i];
        if( currentName.length < tinyName.length){
            tinyName = currentName;
        }
    }
    return tinyName;
}

var smallestName = tinyFriend(['hossain','opi','ba','Irfath']);
console.log(smallestName);
// feetToMile//

function feetToMile(mile){
    var feet = mile/5280;
    // var finalFeet = Math.round(feet);
    return feet;
}
var result = feetToMile(1228883);
console.log(result);

// woodCalculator//

function woodCalculator(chair,table,bed){
    var numWoodChair = chair*1;
    
    var numWoodtable = table*3;
    var numWoodbed = bed*5;
    if(numWoodChair<0||numWoodtable<0||numWoodbed<0){
        console.log('Negative input are not allowed please check the input again');
        return 0;
    }
    else{
        var totalNumWood=numWoodChair+numWoodtable+numWoodbed;
        return totalNumWood;
    }
}
var result2=woodCalculator(1,6,3);
console.log(result2);

// brickCalculator//

function brickCalculator(floor){
    var firstPortion = 10;
     if(floor<0){
        console.log('insert the correct value');
        return false;
    }
    else if(floor<=10){
        var heightInFeet = floor*15;
    }
    else if(floor>10 && floor<=20){
        var secondPortion =floor - firstPortion;
        var length1 = firstPortion *15;
        var length2 = secondPortion * 12;
        var heightInFeet = length1 + length2;
    }
    else{
        var secondPortion=10;
        var thirdPortion=floor-(firstPortion+secondPortion);
        var length1 = firstPortion *15;
        var length2 = secondPortion * 12;
        var length3 = thirdPortion*10;
        var heightInFeet = length1 + length2 + length3; 
    }
    var bricks = heightInFeet*1000;
    return bricks;
}
var result3 = brickCalculator(34);
console.log(result3);

// tinyFriend//

function tinyFriend(nameList){
var min = nameList[0];
for(var i=0;i<nameList.length;i++){
    var element = nameList[i];
    if(element.length<min.length){
    min=element;
    }
}
return min;
}
var name = ['jakiya','nayeem','sopon','ritu','fatema','alib','tanvir','ovi','tayn'];
var result4 = tinyFriend(name);
console.log(result4);
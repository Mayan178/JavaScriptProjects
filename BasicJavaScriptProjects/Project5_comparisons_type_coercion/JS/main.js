
function getTypeof (){//function to return the type of something
    document.write(typeof "This is life");
}

function getNaN () {//function getting the browser to dispay NaN
    var myStrg = "today is a good day";
    document.getElementById("showNaN").innerHTML = myStrg*3;

}

function checkStr () {//function using isNaN on a string
    var strTest = isNaN("This is my life");
    document.getElementById("showstrTest").innerHTML = strTest;

}

function checkNumber () {//function using isNaN on a number
    var numberTest = isNaN(100);
    document.getElementById("shownumberTest").innerHTML = numberTest;

}

function checkInfinity () {//function returning "infinity"
    var infiniteNumber = 5E310;
    document.getElementById("showInfinity").innerHTML = infiniteNumber;

}

function checkNegativeInfinity () {//function returning "-infinity"
    var negativeInfiniteNumber = -6E309;
    document.getElementById("showNegativeInfinity").innerHTML = negativeInfiniteNumber;

}

function checkBooleanTrue () {//function returning true
    document.getElementById("showBooleanTrue").innerHTML = (100<299);

}

function checkBooleanFalse () {//function returning false
    document.getElementById("showBooleanFalse").innerHTML = (50>400);

}

function writeToConsole () {//function writing to the console
    console.log(60*10);
    document.getElementById("useConsole").innerHTML = "Done!";
}

function checkCoercion () {//function using type coercion
    document.getElementById("useCoercion").innerHTML = "five"+10;
}

function writeFalseToConsole () {//function writing false to the console, using boolean logic
    console.log(67>=100);
    document.getElementById("useConsoleFalse").innerHTML = "Done!";
} 


function compareTrue () {//function comparing 2 numbers and returning true as equal
    document.getElementById("comparisonTrue").innerHTML = (200*2)==400;
} 

function compareFalse () {//function comparing 2 numbers and returning false as not equal
    document.getElementById("comparisonFalse").innerHTML = (10-2)==3;
} 



function gettripleComparison1 () {//function comparing 2 strings that are the same
    document.getElementById("tripleComparison1").innerHTML = "giraffe"==="giraffe";
} 

function gettripleComparison2() {//function comparing a string and a number
    document.getElementById("tripleComparison2").innerHTML = "giraffe"=== 10;
} 


function gettripleComparison3() {//function comparing a string and a number with the same value
    document.getElementById("tripleComparison3").innerHTML = "10"=== 10;
} 

function gettripleComparison4() {//function comparing two numbers with different values
    document.getElementById("tripleComparison4").innerHTML = 15 === 10;
} 


function getandTrue() {//function checking for conditions and returning true
    document.getElementById("andTrue").innerHTML = (10>2) && (100>99);
} 

function getandFalse() {//function checking for conditions and returning false
    document.getElementById("andFalse").innerHTML = (6<5) && (100>99);
} 


function getorTrue() {//function checking for conditions and returning true
    document.getElementById("orTrue").innerHTML = (10>2) || (100<99);
} 

function getorFalse() {//function checking for conditions and returning false
    document.getElementById("orFalse").innerHTML = (6<5) || (99>100);
} 


function getnotTrue() {//function if calculation is true or not, and as it's not, returns true
    document.getElementById("notTrue").innerHTML = !(20<8);
} 

function getnotFalse() {//function if calculation is true or not, and as it is true, returns false
    document.getElementById("notFalse").innerHTML = !(8<20);
} 
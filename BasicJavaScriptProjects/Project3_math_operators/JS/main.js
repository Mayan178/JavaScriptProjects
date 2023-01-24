function addNumbers (){//function to add numbers together
    var total = 50 + 50;
    document.getElementById("Math").innerHTML = "50 + 50 = " + total;
}

function substractNumbers (){//function to substract numbers
    var total2 = 30 - 40;
    document.getElementById("Math2").innerHTML = "30 - 40 = " + total2;
}

function multiplyNumbers (){//function to multiply numbers
    var total3 = 20*60;
    document.getElementById("Math3").innerHTML = "20 x 60 = " + total3;
}

function divideNumbers (){//function to divide numbers
    var total4 = 140/2;
    document.getElementById("Math4").innerHTML = "140 / 2 = " + total4;
}

function multiOperations (){//function listing multiple operations
    var totalMulti = (12+45)*4/2;
    document.getElementById("MathMulti").innerHTML = "12 add 45, multiply by 4, and then divide by 2 is equal to " + totalMulti;
}

function modulusOperation (){//function to find out a division's remainder
    var totalModulus = 600 % 7;
    document.getElementById("MathModulus").innerHTML = "When you divide 600 by 7, you have a remainder of " + totalModulus;
}

function negativeOperations (){//function turning a number into its negative
    var myNumber = -24;
    document.getElementById("MathNegative").innerHTML = "The negative of -24 is " +-myNumber;
}

function incrementNumber (){//function incrementing by 1
    var numberToIncrement = 10;
    numberToIncrement++;
    document.getElementById("MathIncrement").innerHTML = "Incrementing 10 by 1 gives you " + numberToIncrement;
}

function decrementNumber (){//function to decrement by 1
    var numberToDecrement = 10;
    numberToDecrement--
    document.getElementById("MathDecrement").innerHTML = "Decrementing 10 by 1 gives you " + numberToDecrement;
}


function randomNumber (){//function to generate a random number between 0 and 50
    var myRandomNumber = Math.random()*50;
    document.getElementById("MathRandom").innerHTML = "My random number between 0 and 50 is " + myRandomNumber;
}

function truncNumber (){//function to truncate a number and return its whole part
    var myTruncNumber = Math.trunc(34.789);
    document.getElementById("MathObject").innerHTML = "Truncating 34.789 gives you " + myTruncNumber;
}
function calculateNumbers (){
    var number1 = document.getElementById("number1").value;//setting the value of number1 based on user input
    var number2 = document.getElementById("number2").value;//setting the value of number2 based on user input
    if (isNaN(number1) || isNaN(number2)){
        alert("You must use 2 numbers");
        return false;
      }//making sure both inputs contain numbers, if not, returning a message
    var multipliedNumber = number1*number2;//setting value of multiplication
    var addedNumber = parseInt(number1)+parseInt(number2);//setting value of addition
    var myResult = "Those 2 numbers multiplied are equal to ";
    myResult += multipliedNumber;
    myResult += " and when added, are equal to ";
    myResult += addedNumber//concatenation over
    document.getElementById("resultbox").innerHTML = myResult;//show results in the resultbox HTML element
}
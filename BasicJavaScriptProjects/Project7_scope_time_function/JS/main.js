var globalNumber1 = 100
var globalNumber2 = 200


function CallGlobal() {//function making use of the global variables globalNumber1 and globalNumber2
    var MyNumber = globalNumber1+globalNumber2;
    document.getElementById("Global").innerHTML = "Numbers " + globalNumber1 + " + " +  globalNumber2 + " = " + MyNumber;
}

//extra function set up to create local variables
function Multiply_Numbers() {
    var localNumber1 = 5;
    var localNumber2 = 10;
    Multiplied = localNumber1*localNumber2;
    document.getElementById("Local").innerHTML = localNumber1 + " x " +  localNumber2 + " = " + Multiplied;
}

//function trying to call variables created within the previous function
function CallLocal() {
    myResult = localNumber1+localNumber2;
    console.log(myResult);
    document.getElementById("Local").innerHTML = localNumber1 + " + " +  localNumber2 + " = " + myResult;
}

//function getting the time of day and showing a different message depending upon it
function getTimeofDay() {
    var myHour = new Date().getHours();
    var myTime = new Date().getHours() + ":" + new Date().getMinutes();
    if (myHour <=12 && myHour>1) {
        my_TimeMessage = "Good morning, the time is " + myTime;
    }
    else if (myHour > 12 && myHour <=18) {
        my_TimeMessage = "Good afternoon, the time is " + myTime;
    }
    else {
        my_TimeMessage = "Good evening, the time is " + myTime;
    }
    document.getElementById("timeMessage").innerHTML = my_TimeMessage
}


//function showing which color a child's eyes could be, depending on parents'
function getChildEyeColour() {
    var mumEyes = document.getElementById("mumEyes").value;
    var dadEyes = document.getElementById("dadEyes").value;
    if (mumEyes== "Blue" && dadEyes== "Blue") {
        my_eyeMessage = "The child will have blue eyes";
    }
    else {
        my_eyeMessage = "The child could have blue, brown or green eyes";
    }
    document.getElementById("eyeMessage").innerHTML = my_eyeMessage
}

//function stating whether you are a child or an adult based on age entered
function checkAge() {
    var yourAge = document.getElementById("age").value;
    
    if (yourAge<18) {
        the_Message = "You are still a child";
    }
    else {
        the_Message = "You are an adult";
    }
    document.getElementById("ageMessage").innerHTML = the_Message
}

//assignment 43
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}
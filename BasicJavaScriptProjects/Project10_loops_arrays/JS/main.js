// While loop function for assignment 50 below
function Call_Loop() {
    var message = "";
    var x = 1;
    while(x<=10) {
        if (x==1)
            {message +=x;}
        else
        {message +=", "+x;}
        x++;
    }
    message+= ", the countdown is over!";
    document.getElementById("Loop").innerHTML = message;
}

//function for challenge 13, finding out the length of a given string
function Check_Length() {
    var my_String = "What a wonderful world";
    var x=my_String.length;
    document.getElementById("CheckLength").innerHTML = "The string is " + x + " characters long.";
}

//function for assignment 51, going through a list of instruments 
function for_Loop() {
    var my_Instruments = ["Harmonica", "Guitar", "Saxophone", "Violin", "Harp"];
    var my_InstrumentsString = "";
    var x = 0;
    for (x=0; x<my_Instruments.length;x++) {
        if(x!=my_Instruments.length-1)
            {my_InstrumentsString += my_Instruments[x] + ", ";}
        else
            {my_InstrumentsString += my_Instruments[x];}
    }
    document.getElementById("List_of_Instruments").innerHTML = my_InstrumentsString;
}

//function for assignment 52, setting up an array and returning one of its values 
function array_Function() {
    var Jobs = [];
    Jobs[0] = "Brick Layer";
    Jobs[1] = "Plumber";
    Jobs[2] = "Electrician";
    Jobs[3] = "Fence Erector";
   
    document.getElementById("Array").innerHTML = "As one of his previous jobs, John used to be a " + Jobs[1];
}

//function using a constant for assignment 53
function constant_Function() {
    const Car = {brand: "Ford", model:"Focus", colour:"Red"};
    Car.model = "Escort";
    Car.YearManufacture = "2005";
    document.getElementById("Constant").innerHTML = "Sue is driving a " + Car.colour + " "+ Car.brand + " " + Car.model + " manufactured in " + Car.YearManufacture;
}

//function using let for assignment 54
function let_Function() {
    var Age = 18;
    var my_strg ="";
    my_strg+="The Age is " + Age + "<br>"
    document.getElementById("UsingLet").innerHTML = my_strg;
    {
        let Age = 25;
        my_strg+="The Age is " + Age + "<br>"
        document.getElementById("UsingLet").innerHTML = my_strg;
    }
    my_strg+="The Age is " + Age + "<br>"
    document.getElementById("UsingLet").innerHTML = my_strg;
}

//function for challenge 14
function return_Function() {
    var first = parseInt(document.getElementById("first").value);
    var second = parseInt(document.getElementById("second").value);

    var my_Sum = first+second;
    document.getElementById("ReturnMessage").innerHTML = my_Sum;
    return my_Sum;
}

//variables and function for assignment 55
let Student = {
    Firstname : "David",
    Lastname : "Wilkinson",
    Age : "22",
    Subject : "Mathematics",
    Uni : "Cambridge",
    Details : function() {
        return this.Firstname + " " + this.Lastname + " who is " + this.Age + " years old is studying " + this.Subject + " at the University of " + this.Uni;
    }
};

function Show_Student() {
    document.getElementById("Student_Object").innerHTML = Student.Details();
}


//for Challenge 15
let Sports = [];
Sports[0] = "Jogging";
Sports[1] = "Cycling";
Sports[2] = "Yoga";
Sports[3] = "Pilates";
Sports[4] = "Weights";
Sports[5] = "Swimming";
Sports[6] = "Dancing";
Sports[7] = "Cross Training";
Sports[8] = "Skiing";

function break_Function() {
    var WeeklyPlan = "";
    for (i=0; i<=8; i++)
    {
        if (i === 7) {break;}
        var dayofweek = i+1;
        WeeklyPlan += "On day " + dayofweek + " of this week, you will be doing " + Sports[i] + "<br>";

    }
    document.getElementById("Challenge15_Break").innerHTML = WeeklyPlan;
}

function continue_Function() {
    var WeeklyPlan = "No swimming this week!<br>";
    var dayCounter = 0;
    for (i=0; i<=8; i++)
    {
        
        if (i === 5) {continue;}
        else {dayCounter = dayCounter+1;}
        WeeklyPlan += "On day " + dayCounter + " of this week, you will be doing " + Sports[i] + "<br>";

        if (dayCounter === 7) {break;}

    }
    document.getElementById("Challenge15_Continue").innerHTML = WeeklyPlan;
}


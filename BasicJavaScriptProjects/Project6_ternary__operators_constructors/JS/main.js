
function Ride_Function() {//function to show different outcome based on user input: height to ride
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {//function to show different outcome base on user input: age to vote
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {//function to set up a Vehicle object
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");//creating 3 different instances of a Vehicle
var Emily = new Vehicle("Jeep", "Trail Hawk", 20219, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {//function to extract data regarding Erik's car
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

var Donald = new Vehicle("Fiat", "Punto", 2019, "Blue");//creating a new vehicle

function getNewVehicle() {//getting informaion for this new vehicle
    document.getElementById("New_and_This").innerHTML = "Donald drives a " + Donald.Vehicle_Color + "-colored " + Donald.Vehicle_Model + " manufactured in " + Donald.Vehicle_Year;
}

//this function stopped the rest of the page from working properly
//function runReserved() {
    //var true= "this is a test";
    //document.getElementById("Reserved").innerHTML = true;
//}


//for challenge 9
function Employee(Firstname,Lastname,Office,Age,YearsWorked) {//object contructor (for the Employee object)
    this.Firstname = Firstname;
    this.Lastname = Lastname;
    this.Office = Office;
    this.Age = Age;
    this.YearsWorked = YearsWorked;
}

var Employee1 = new Employee("Peter", "Johnson", "Bristol", 34,5);//creating 3 different instances of an employee
var Employee2 = new Employee("Sophie", "Lavalle", "London", 26,2);
var Employee3 = new Employee("David", "Gardner", "Cardiff", 48,22);


function myEmployee() {//function to extract data regarding Employee2
    document.getElementById("Employee").innerHTML = "One of our employees is " + Employee2.Firstname  + " " + Employee2.Lastname + " who is " + Employee2.Age + " years old, works in the " + Employee2.Office + " office and has " + Employee2.YearsWorked + " years experience in our business";
}


//function for Assignment 38
function multiply_Function() {//function being called by the index.html file
    document.getElementById("Nested_Function").innerHTML = Multiply();
        function Multiply () {
            var x = 5;
            var y = 7;
            function Times_ten() {//nested function returning 50
                z = x * 10;
                return z
            }
            Times_ten();
            var answer = z * y;
            return answer;
        }
}
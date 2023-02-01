// function using switch and case with a default value set
function Show_DayInfo() {
    var dayChosen = document.getElementById("DayofWeek").value;
    var dayMessage;
    switch(dayChosen){
        case "Monday":
            dayMessage = dayChosen + " is the first day of the working week."
            break;
        case "Tuesday":
            dayMessage = dayChosen + " is the second day of the working week."
            break;
        case "Wednesday":
            dayMessage = dayChosen + " is the third day of the working week."
            break;
        case "Thursday":
            dayMessage = dayChosen + " is the fourth day of the working week."
            break;
        case "Friday":
            dayMessage = dayChosen + " is the fifth day of the working week."
            break;
        case "Saturday":
            dayMessage = dayChosen + " is the sixth day of the working week and first day of the weekend."
            break;
        case "Sunday":
            dayMessage = dayChosen + " is the seventh day of the working week and last day of the weekend."
            break;
        default: dayMessage = "Please select a day of the week!"
}
   
    document.getElementById("ShowChoice").innerHTML = dayMessage;
}

//function for assignment 57
function change_Paragraph() {
    var allParagraphs = document.getElementsByClassName("special");
    allParagraphs[1].innerHTML = "You have changed the text in paragraphs number 2";
}


//function for challenge 16 which draws a graphic into the canvas
function change_Canvas()
{
    var graphicArea = document.getElementById("myCanvas");
    var graphicAreactx = graphicArea.getContext("2d");

    // Creates a gradient
    var gradient = graphicAreactx.createRadialGradient(75, 50, 5, 90, 60, 100);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "yellow");

    // Fill with gradient
    graphicAreactx.fillStyle = gradient;
    graphicAreactx.fillRect(0, 0, 400, 200);
}
//end of function for challenge 16 which draws a graphic into the canvas

//function for challenge 17 which draws a graphic into the canvas
function change_Canvas2()
{
    var graphicArea = document.getElementById("myCanvas");
    var graphicAreactx = graphicArea.getContext("2d");
    var gradient = graphicAreactx.createLinearGradient(0, 0, 400, 200);
    gradient.addColorStop(0, "pink");
    gradient.addColorStop(0.5, "yellow");
    gradient.addColorStop(1, "green");
    graphicAreactx.fillStyle = gradient;
    graphicAreactx.fillRect(0, 0, 400, 200);
    
}
//end of function for challenge 17 which draws a graphic into the canvas

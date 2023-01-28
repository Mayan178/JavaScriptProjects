
function join_Strings() {//function concatenating diffent strings to make a sentence
    var string1 = "This is how ";
    var string2 = "we concatenate ";
    var string3 = "strings together to make a sentence.";
    document.getElementById("Concatenate").innerHTML = string1.concat(string2,string3);
}

function get_String() {//function using slice to get a specific part of a string
    var My_Sentence = "Somewhere over the rainbow";
    var My_Section = My_Sentence.slice(19,26);
    document.getElementById("Slice").innerHTML = My_Section;
}

function transform_UpperCase() {//takes in a string and turns it into uppercase
    var My_Sentence = "Blinded by the lights";
    var My_Upper = My_Sentence.toUpperCase();
    document.getElementById("UpperCase").innerHTML = My_Upper;
}

function search() {//finds the first occurence of the word "heaven"
    var My_Sentence = "Stairway to Heaven";
    var My_WordPosition = My_Sentence.search("Heaven");
    document.getElementById("Search").innerHTML = My_WordPosition;
}

function number_ToString() {//turns a number into a string
    var My_Number = 365;
    document.getElementById("ToString").innerHTML = My_Number.toString();
}

function to_Precision() {//returns a number up to 8 digits long from 12
    var My_Number = 123456.789012;
    document.getElementById("toPrecision").innerHTML = My_Number.toPrecision(8);
}

function to_Fixed() {//returns a number up to 8 digits long from 12
    var My_String =  123456.789012;
    document.getElementById("toFixed").innerHTML = My_String.toFixed(2);
}

function value_Of() {//returns a number up to 8 digits long from 12
    var My_String = "This is my other string";
    document.getElementById("valueOf").innerHTML = My_String.valueOf();
}


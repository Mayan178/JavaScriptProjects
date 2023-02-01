function validateForm() {

    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let age = document.getElementById("age").value;
    var errorcount = 0;
    if (fname == "") {
        document.getElementById("firstmessage").innerHTML = "Please enter a firstname *";
        errorcount++;
    }
    else {document.getElementById("firstmessage").innerHTML = "";}
    if (lname == "") {
        document.getElementById("lastmessage").innerHTML = "Please enter a lastname *";
        errorcount++;
    }
    else {document.getElementById("lastmessage").innerHTML = "";}
    if (age == "") {
        document.getElementById("agemessage").innerHTML = "Please select your age range *";
        errorcount++;
    }
    else {document.getElementById("agemessage").innerHTML = "";}
    if (errorcount>0) {return false;}
  }
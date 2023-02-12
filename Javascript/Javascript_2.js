function validateForm() {

    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    // added in for challenge 30
    let pnumber = document.getElementById("phonenumber").value;
    // end of added in for challenge 30    
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
    // added in for challenge 30
    if (pnumber == "") {
        document.getElementById("phonemessage").innerHTML = "Please enter your phone number *";
        errorcount++;
    }
    else {document.getElementById("phonemessage").innerHTML = "";}
    // end of added in for challenge 30
    if (age == "") {
        document.getElementById("agemessage").innerHTML = "Please select your age range *";
        errorcount++;
    }
    else {document.getElementById("agemessage").innerHTML = "";}
    if (errorcount>0) {
        // added for challeng 30 to show alert message if any one form field is left empty
        alert("Please, fill in the form where required");
        // end of added for challeng 30 to show alert message if any one form field is left empty
        return false;
    }
  }
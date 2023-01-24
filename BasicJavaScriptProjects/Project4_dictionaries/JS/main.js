var Employee = {//creating an Employee dictionary
    Firstname : "Robert",
    Lastname : "Chapman",
    Age : 28,
    JobTitle : "Electrical Engineer",
    Office: "London"
}

function getJobTitle (){//returns the job title of the employee
    document.getElementById("Dictionary").innerHTML = Employee.JobTitle;
}

function getOffice (){//should return the office where the employee is based, but deletes it first from the dictionary so returns 'undefined'
    delete Employee.Office;
    document.getElementById("Dictionary2").innerHTML = Employee.Office;
}


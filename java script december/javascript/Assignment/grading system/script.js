alert("Welcome to My Grading system for all school in Nigeria")
alert("Note: This the imput are case sensitive")
alert("If you are a university student input UNI/uni/Uni")
alert("If you are a polytechnic student or Monotechnic Student input Poly/POLY/poly")
alert("If you are a secondary school Student just input SSS/JSS/SS")

let School = prompt("Enter Your school type:")
let score = Number(prompt("Enter you score"))

if (School == "UNI" || School == "uni" || School == "Uni"){
    alert("There are two grading system in Nigeria 5-point or 4-point")
    alert("you can identify the 5-point grading system as 5-PGS and the 4-point grading system as 4-PGS")
    let point =prompt("Enter the Grading System point")

    if(point == "5-PGS" || point == "5-point" || point == "5-Point"){
        if (score >= 70) {
        grade = "A (First Class)"
        gpa = 5.0;
        }else if (score >= 60) {
            grade = "B (Second Class Upper)"
            gpa = 4.0;
        }else if (score >= 50) {
            grade = "C(Second Class Lower)"
            gpa = 3.0;
        }else if (score >= 45) {
            grade = "D (Third Class)"
            gpa = 2.0;
        }else if (score >= 40) {
            grade = "E (Pass)"
            gpa = 1.0;
        }else {
            grade = "F (Fail)"
            gpa = 0.0;
        }
    }

    else if(point == "4-PGS" || point == "4-point" || point == "5-Point"){
        if (score >= 70) {
        grade = "A (First Class Honours)"
        gpa = 4;
        }else if (score >= 60) {
            grade = "B (Second Class Upper Division)"
            gpa = 3;
        }else if (score >= 50) {
            grade = "C (Second Class Lower Division)"
            gpa = 2;
        }else if (score >= 45) {
            grade = "D (Third Class)"
            gpa = 1;
        }else if (score >= 40) {
            grade = "E"
            gpa = 0;
        }else {
            grade = "F (Fail)"
            gpa = 0.0;
        }

    }

    else{
        alert("Wrong input")
    }
}
else if (School == "POLY" || School == "MONO" || School == "Poly" || School == "poly") {
    if (score >= 70) {
    grade = "A (Distinction)"
    gpa = 5.0;
    }else if (score >= 60) {
        grade = "B (Upper Credit)"
        gpa = 4.0;
    }else if (score >= 50) {
        grade = "C (Lower Credit)"
        gpa = 3.0;
    }else if (score >= 45) {
        grade = "D (Pass)"
        gpa = 2.0;
    }else if (score >= 40) {
        grade = "E (Pass)"
        gpa = 1.0;
    }else {
        grade = "F (Fail)"
        gpa = 0.0;
    }
}
else if (School == "SS" || School == "JSS" || School == "SSS") {
    if (score >= 70) {
        grade = "A (Excellent)"
    }else if (score >= 60) {
        grade = "B (Very Good)"
    }else if (score >= 50) {
        grade = "C (Good)"
    }else if (score >= 45) {
        grade = "D (Fair)"
    }else if (score >= 40) {
        grade = "E (Pass)"
    }else {
        grade = "F (Fail)"
    }
}else{
    alert(School + " Is not recongnised")
}

if(School == "SS" || School == "JSS" || School == "SSS"){
    alert("Your Grade is " + grade)
}else{
alert("Your Grade is " + grade + " with a GPA of " + gpa)
}
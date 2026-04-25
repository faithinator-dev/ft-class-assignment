console.log(firstParagraph.innerHTML)

let areaOfACircle = 22/7 * (5**2)

function changeParagraph() {
    firstParagraph.innerHTML = "loading..."
    console.log(firstParagraph)
}

function showmyName() {
    firstParagraph.innerHTML = "Faith"
}

function edit() {
    firstParagraph = <h1 style="color:red;">faith</h1>
}

function showGrade() {
    console.log(userInput.value)
}

if (userInput.value >= 80) {
    console.log("A")
} else if (userInput.value >= 70) {
    console.log("B")
} else if (userInput.value >= 60) {
    console.log("C")
}   else if (userInput.value >= 50) {
    console.log("D")
} else {
    console.log("E")
}

let grade = userInput.value >= 80 ? "A" :
            userInput.value >= 70 ? "B" :
            userInput.value >= 60 ? "C" :
            userInput.value >= 50 ? "D" : "E"

console.log(grade)



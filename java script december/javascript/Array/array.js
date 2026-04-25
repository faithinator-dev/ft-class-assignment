const studentNames = ['issac', 'temiloluwa', 'ubaydah', 'glory', 'doyin', 'dara', 'faith','aishat'];

// console.log(studentNames[0])
// console.log(studentNames.length) //it show the lenght
console.log(studentNames[studentNames.length -1]) //it will always give the last items in an array

// const students = []

// const student_details = {id: 1, name: 'Temiloluwa', dept: 'Application'}

// Array method:
// - push
// -


// i work as a iterator
for (let i = 0; i < studentNames.length; i++) {
    const element = studentNames[i]
    console.log(element)
    // display_students.innerHTML += `<p>${element}</p>`;

    // if (studentNames[i] != 'glory' && studentNames[i] != 'oseoluwa') {
    //     list.innerHTMl += `<li>${studentNames[i]}</li>`
    // }

}

for (let i = 0; i < studentNames.length; i++) {
    table.innerHTML += `
    <tr>
        <td>${i}</td>
        <td>${studentNames[i]}</td>
        <td onclick="deleteStudent(${i})"><img src="mynaui--trash.svg" alt=""></td>
    </tr>
        `
}

// function addStudent() {
//     let userInput = userInput.value
//     // console.log('meeeeeeeeeeeeeeeeeeeeeeeeeee')
//     studentNames.push(userInput) //Add new items to an existing array
//     console.log(studentNames)

//     table.innerHTML += `<tr> <td>${studentNames.length-1}</td> <td>${userInput}</td></tr>`

// }

function addStudent(){
    let userInput = userInput.value

    if(studentNames.indexOf(userInput)){
        console.log("student found");
    } else{
        console.log("student not found")
    }
    studentNames.push(userInput) //Add new items to an existing array
    console.log(studentNames)

    for(let i = 0; i < studentNames.length; i++){
        table.innerHTML += `
    <tr> 
        <td class="text-danger">${i + 1}</td> 
        <td class="text-warning bg-secondary">${studentNames[i]}</td> 
    </tr>`
    }
}

function deleteStudent(val){
//  studentNames.pop()
//  console.log()
//  table.innerHTML = ''
//  display();
console.log("on working")
studentNames = [...studentNames.slice(0, val), ...studentNames.slice(val + 1)]
 table.innerHTML = ''
 display()
}

// function deleteStudent(val){
    // console.log("on working")
    // studentNames = studentNames.splice(0, var)
// }




let letters = ['b', 'y', 'c', 'o', 'm']
//  letters = letters.pop(letters.findIndex(3))
// letters = [...letters.slice(0,5)]
// letters = [...letters.slice(0,letters.length - 1)]

console.log(letters)
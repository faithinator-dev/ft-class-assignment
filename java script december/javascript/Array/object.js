const students = ['taiwo', 'Kemi', 'Emmanuel']

let student_details = {
    name: 'kenny',
    age: 21,
    dept: 'fullstack',
    courses: ['javascript', 'vcs', 'firebase']
}
console.log(student_details)

// key-value pair

// student_details.age += 5
//student_details.name = 'TayeTAiwo'

//Student_details.course[2] = 'bootstrap';

// spread operator
student_details = {
    ...student_details, 
    name: 'kenny', 
    age : student_details.age + 5, 
    courses: ['Javascript', 'VCS', 'Bootstrap']
}

const student_table = document.getElementById('student-table')

student_table.innerHTML += `
        <tr>
            <td>${student_details.name}</td>
            <td>${student_details.age}</td>
            <td>${student_details.dept}</td>
            <td>${student_details.courses}</td>
        </tr>`



        
console.log(student_details)



const matric_Numbers = []

function generateMatric() {
    const matric_no =  `2026${Math.floor(Math.random() * 100000)}`

    matric_Numbers.push(matric_no)
    console.log(matric_Numbers)

    const display = document.getElementById('display')
    display.innerHTML = ''
    for (i = 0; i < matric_Numbers.length; i++) {
        display.innerHTML += `
        <div class="card col-3 my-1 d-flex justify-content-between"><span>${matric_Numbers[i]}</span>
        <span class="ms-auto btn btn-danger fw-bold text-center" onclick="showOptions(${i}) ">X</span>
        </div>
        `
    }
}

function showOptions(matId) {
    const options = document.getElementById('options')

    options.innerHTML = `
     <span>Are you sure you want to delete this items?</span>
        <div class="my-3">
            <button class="btn col-2 btn-outline-danger" onclick="deleteMatric(${matId})">
            Yes
            </button>
            <button class="btn col-2 btn-md btn-outline-success" onclick="decline()">
            NO
            </button>
        </div>
    `

    options.style.display = 'block'
}

function decline(){
    options.style.display = 'none'
}

function deleteMatric(matId) {
    matric_Numbers.splice(matId, 1);

    display.innerHTML = ''
    for (i = 0; i < matric_Numbers.length; i++) {
        display.innerHTML += `
        <div class="card col-3 my-1 d-flex justify-content-between"><span>${matric_Numbers[i]}</span>
        <span class="ms-auto btn btn-danger fw-bold text-center" onclick="showOptions(${i}) ">X</span>
        </div>
        `
    }

    options.style.display = 'none'
}

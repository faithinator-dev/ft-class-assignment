const nameInput = document.getElementById('nameInput')

const mailInput = document.getElementById('mailInput')
const dlpEmailInfo= document.getElementById('dlpEmailInfo')
const phoneInput = document.getElementById('phoneInput')
const dlpPhoneInfo = document.getElementById('dlpPhoneInfo')
const passwordInput = document.getElementById('passwordInput')
const dlpPasswordInfo = document.getElementById('dlpPasswordInfo')




const nameProve = (e) => {
    const dlpNameInfo = document.getElementById('dlpNameInfo')
    let Inputname = e.target.value;
    console.log(e)
    const nameRegex = /(?=.*[\s])/
    const nameLength = /.{5,}/

    if (nameRegex.test(Inputname) && nameLength.test(Inputname)){
        // dlpNameInfo.style.color = 'green'
        dlpNameInfo.innerHTML = ""
        dlpNameInfo.innerHTML =         
        `
        <span style="color: green">Add a space</span>
        `

        
    } else {
        // dlpNameInfo.style.color = 'red'
        dlpNameInfo.innerHTML = ""
         dlpNameInfo.innerHTML =      

        `
        <span style="color: red">Add a space</span>
        `
    }



}


const mailProve = (e) => {
    const dlpEmailInfo= document.getElementById('dlpEmailInfo')
    let InputMail = e.target.value;
    const atkeyregex = /(?=.*[@])/
    const dotkeyregex = /(?=.*[.])/

    if (atkeyregex.test(InputMail) && dotkeyregex.test(InputMail)){
        dlpEmailInfo.innerHTML = ""
        dlpEmailInfo.innerHTML =         
        `
        <span style="color: green">It must be a valid email</span>
        `
    }else{
        dlpEmailInfo.innerHTML = ""
        dlpEmailInfo.innerHTML =         
        `
        <span style="color: red">It must be a valid email</span>
        `
    }
}

const phoneProve = (e) => {
   let InputPhone = e.target.value;

//    const ponelength = /.{14}$/
   const phoneregex = /^[+]+\d{13,14}$/
   

   if (phoneregex.test(InputPhone)) {

    
     dlpPhoneInfo.innerHTML = ""
     dlpPhoneInfo.innerHTML =         
        `
        <span style="color: green">It must have a country code</span>
        `
   } else{
        dlpPhoneInfo.innerHTML = ""
     dlpPhoneInfo.innerHTML =         
        `
        <span style="color: red">It must have a country code</span>
        `
   }
}  

const passwordProve = (e) => {
    let InputPassword = e.target.value
    const upperLower = /(?=.*[a-z])(?=.*[A-Z])/
    const number = /(?=.*\d)/
    const special = /(?=.*[@$!%*?&])/
    const minLength = /.{8,}/

    let msg = ""

    if (upperLower.test(InputPassword)) {
        msg += '<span style="display: block; color: green">It must have uppercase and lower case</span>'
    } else {
        msg += '<span style="display: block; color: red">It must have uppercase and lower case</span>'
    }

    if (number.test(InputPassword)) {
        msg += '<span style="display: block; color: green">Must have a number</span>'
    } else {
        msg += '<span style="display: block; color: red">Must have a number</span>'
    }

    if (special.test(InputPassword)) {
        msg += '<span style="display: block; color: green">Must have at least a special character</span>'
    } else {
        msg += '<span style="display: block; color: red">Must have at least a special character</span>'
    }

    if (minLength.test(InputPassword)) {
        msg += '<span style="display: block; color: green">It must not be less than 8 character</span>'
    } else {
        msg += '<span style="display: block; color: red">It must not be less than 8 character</span>'
    }

    dlpPasswordInfo.innerHTML = msg
}
// +=
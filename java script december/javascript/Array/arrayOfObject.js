//Array is a collection of items (products/ all Products -)
// object - a collection of related items that belong to a single entity (product object - name, price, quantity, images, description...)


let products = JSON.parse(localStorage.getItem('products'))


// const products = [
//     {id: 1, name: 'T-shirt', price: 40000, description: 'the best T-shirt' },
//     {id: 2, name: 'Oriamo powerBank', price: 35000, description: 'Temilola the ambassador' },
//     {id: 3, name: 'Samsung s21', price: 35000, description: 'NOthing but the best' },
//     {id: 4, name: 'Phone charger', price: 5000, description: 'Fast charging charger' },
    

// ]
found = {}



function displayProduct(){
    const productsDiv = document.getElementById('productsDiv');
    productsDiv.innerHTML = ""

    for (let i = 0 ; i < products.length; i++){

        productsDiv.innerHTML += 
        `
        <div class="card position-relative shadow p-1 col-lg-3 col-md-4">
        <div class="d-flex justify-content-between align-items-center">
            <p class="fw-medium fs-5">${products[i].name}</p>
            <img src="flowbite--edit-outline.svg" alt="" style="cursor: pointer; width: 20px; height: 20px;" onclick="editProduct(${i})">
         </div>
       <!--- <span class="position-absolute shadow top-0 mt-2 me-1 text-end px-3 btn text-danger bg-dark" style="right:0;" onclick="deleteProduct(${i})">X</span>
        <p class="fw-medium p-2 text-black fs-5">${products[i].name}</p> --->
        <span class="text-sm text-secondary-subtle d-block">${products[i].description}</span>
        <span class="text-sm fw-medium d-block">#${products[i].price}</span>
        <button class="btn btn-dark">Add to cart</button>
    </div>
        `
    }
}

displayProduct();

const addName = () =>{    //ES6 method

}

function addProduct(){  // Es5 method
    const productName = document.getElementById("names").value

    const productPrice = document.getElementById('price').value

    const productDescription = document.getElementById('description').value


    //Check if another product already exists, using a unique entity
    // Arrow Function
    const student = ['tolu', 'kunle', 'sayo']
    // student.some((obj) => console.log(obj))
    const checkName =products.some((obj) => obj.name === productName) 
    console.log(checkName)
    // if (checkName == true){
    //     alert('Name already Exist')
    // return
    // } else if (productName == ""){
    //     alert('Name cannot be empty')
    //     return
    // }
    

    //Empty arrays - false value. array with value are true

    const id = products.lenght > 0 ? products[products.length -1].id : 0;
    console.log(id)


    console.log(id, productName, productDescription, productPrice)


    // const item = {id: id + 1, name: productName, price: productPrice, description: productDescription}

    // console.log(item)

    // products.push(item)

    // //Send products to local Storage
    // localStorage.setItem('products', JSON.stringify(products))
    // // productsDiv.innerHTML = ''
    
    
    const btn1 = document.getElementById('btn1')
    
    if (btn1.innerText === 'Add product'){
        const id = products.lenght > 0 ? products[products.length -1].id : 0; 
        const item = {id: id+1, names, price: products_price, description: products_description}

            products.push(item)
            //send product to local host
            localStorage.setItem('products', JSON.stringify(products))
            // displayProduct()
        } else {
            found.name = names.value
            found.price = price.value
            found.description = description.value
            
            localStorage.setItem('products', JSON.stringify(products))
            
            btn1.innerHTML = 'Add product'
            names.value = ''
            price.value = ''
            description.value = ''
            // displayProduct()
            console.log(found);

        }
        productsDiv.innerHTML = '';
        displayProduct()
    }
    
    
// assignment create A student registration page -  firstname, lastname, email address, matric No(auto generate), courses, gender (male and female). display  the information using a table. Add delete 

function deleteProduct(index){
     
    products.splice(index, 1)
    displayProduct()
    localStorage.setItem('products', JSON.stringify(products))
}

const searchProduct = (e) => {
    // if (e.key === "Enter") => {
    //     console.log("enter is press")
    // }

    //find
    const searchInput = e.target.value;
    // localStorage.push
    // console.log(JSON.parse(localStorage.getItem('products')))
    const searchResult = products.filter((prd) => prd.name.includes(searchInput))
    console.log(searchResult)

    const productsDiv = document.getElementById('productsDiv');
    productsDiv.innerHTML = ""

    for (let i = 0 ; i < products.length; i++){

        productsDiv.innerHTML += 
        `
        <div class="card position-relative shadow p-1 col-lg-3 col-md-4">
        <span class="position-absolute shadow top-0 mt-2 me-1 text-end px-3 btn text-danger bg-dark" style="right:0;" onclick="deleteProduct(${i})">X</span>
        <p class="fw-medium p-2 text-black fs-5">${searchResult[i].name}</p>
        <span class="text-sm text-secondary-subtle d-block">${searchResult[i].description}</span>
        <span class="text-sm fw-medium d-block">#${searchResult[i].price}</span>
        <button class="btn btn-dark">Add to cart</button>
    </div>
        `
    }





    // displayProduct()
    // return
}


    const editProduct = (i) => {
        found = products.find((prd, index) => index === i)
        console.log(found);
        names.value = found.name
        price.value = found.price
        description.value = found.description
        document.getElementById('btn1').innerHTML = 'Update'

        
    }
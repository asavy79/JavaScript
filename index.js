

function printFirstLast() {

    let firstName = document.getElementById("enterFirstName").value;
    let lastName = document.getElementById("enterLastName").value;

    document.getElementById("firstName").textContent = firstName +  ' ' + lastName;
    
}


const getFirstLast = document.getElementById("returnFirstLast");

getFirstLast.addEventListener("click", printFirstLast)

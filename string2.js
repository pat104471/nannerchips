/*Pat Schierman*/

// function to combine
function combineNames(){
    const firstName=
    document.getElementById('firstName').Value.trim();
    const lastName=
    document.getElementById('lastName').Value.trim();
    return firstName + '' (lastName);{
}
}
console.log()

//function validateZipCode(zipCode){



//Show message



function checkInputs() {
            
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var zipCode = document.getElementById('zipCode').value;

  
    var secretMessage = document.getElementById('secretMessage');


    secretMessage.innerHTML = '';

    
    if (firstName.length <= 20 && lastName.length <= 20 && zipCode.length === 5) {
        
        secretMessage.innerHTML = 'This is the secret message!';
    } else {
        
        alert('Names should not exceed 20 characters and zip code must be exactly 5 digits.');
    }
}


             


  



combineNames();
showSecretMessage();

function myFunction() {
    alert("Congrats");
}

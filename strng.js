function validateform(){
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value

    if (password != 'confrimPassword'){
        alert("The password does not match");
        return;
    }

alert("Registration successful");
document.getElementById('registrationform').onsubmit();
}
;







// take input
let str1 = prompt('Enter a string: ');


function isPalindrome(str) {
    



    let rev = str.split("").reverse().join("");
 


    
   if (rev == str) {
       return true
    }
    return false 
}  


function fn() {
    // code
}
    if (false) {
        // code
       // return
    }




console.log(isPalindrome(str1));




// call the function
const value = isPalindrome(str1);


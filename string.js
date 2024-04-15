




/*Pat Schierman*/


function checkPalindrome() {}

//remove spaces
 const inputString = document.getElementById('Palindrome');

if (isPalindrome(inputString)){
    alert("the string is a palindrome");
}
else{
    alert("the string is not a palindrome");
} 
function isPalindrome(string) {
    const cleanString = string.replace('');

    return cleanString === cleanString.split('').reverse().join('');
}


//main prompt user input
checkPalindrome();







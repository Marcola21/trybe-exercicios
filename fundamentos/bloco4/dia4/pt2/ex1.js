

function palindromeCheck(word) {
    if(word.split('').reverse().join('') == word){
        console.log("Palíndromo")
    } else {
        console.log("Não é palíndromo");
    }
    
}

palindromeCheck('arara')
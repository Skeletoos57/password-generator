// Getting elements

let generateButton = document.getElementById('generate-button');
let resultText = document.getElementById('result-text');
let copyPasswordBtn = document.getElementById('copy-password');

// Adding event listener

generateButton.addEventListener('click', () => {
    generatePassword();
})

copyPasswordBtn.addEventListener('click', () => {
    copyPassword();
})

// Functions

function generatePassword() {

    resultText.value = "";

    const letters = ['A', 'B', 'C', 'D', 'E', 'F',
                     'G', 'H', 'I', 'J', 'K', 'L',
                     'M', 'N', 'O', 'P', 'Q', 'R', 
                     'S', 'T', 'U', 'V', 'W', 'X', 
                     'Y', 'Z', 'a', 'b', 'c', 'd', 
                     'e', 'f', 'g', 'h', 'i', 'j', 
                     'k', 'l', 'm', 'n', 'o', 'p', 
                     'q', 'r', 's', 't', 'u', 'v', 
                     'w', 'x', 'y', 'z'];

    const numbers = ['0', '1', '2', '3', '4', '5',
                     '6', '7', '8', '9'];

    let char0 = letters[Math.floor(Math.random() * letters.length)];
    let char1 = letters[Math.floor(Math.random() * letters.length)];
    let char2 = letters[Math.floor(Math.random() * letters.length)];
    let char3 = letters[Math.floor(Math.random() * letters.length)];
    let char4 = letters[Math.floor(Math.random() * letters.length)];
    let char5 = letters[Math.floor(Math.random() * letters.length)];

    let numb0 = numbers[Math.floor(Math.random() * numbers.length)];
    let numb1 = numbers[Math.floor(Math.random() * numbers.length)];
    let numb2 = numbers[Math.floor(Math.random() * numbers.length)];
    

    // The final Password!

    let password = char0 + char1 + char2 + char3 + char4 + char5 + numb0 + numb1 + numb2;
    
    for (i = 0; i < password.length; i++) {
        resultText.value += password.charAt(i);  
    }
    
}

function copyPassword() {

    if (resultText.value != "010010101101") {
        resultText.focus();
        document.execCommand('selectAll');
        document.execCommand('copy');
        alert("¡Copiado al portapapeles con exito!");
    }else{
        alert("Primero genera tu contraseña.");
    }

}
const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
  "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","s",
  "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
  "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", 
  "/"
];
let btnEl = document.getElementById("btn-el");
let passwordDisplay = document.getElementById("password-display");
let passwordDisplay1 = document.getElementById("password-display-1");


function generatePassword(passwordLength = 12) {
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    
    return password;
}

function displayPassword(){
    const firstPassword = generatePassword()
    const secondPassword = generatePassword()

    passwordDisplay.textContent =firstPassword;
    passwordDisplay1.textContent = secondPassword


}


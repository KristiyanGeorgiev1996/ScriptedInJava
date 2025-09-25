let password = prompt();

function PasswordValid(password) {
    let length = password.length >= 6 && password.length <= 10;
    let lettersDigits = true;
    let counterDigits = 0;

    for (let i = 0; i < password.length; i++) {
        let current = password[i];
        if (current >= '0' && current <= '9') {
            counterDigits++;
        }
        if (!((current >= '0' && current <= '9') || 
              (current >= 'A' && current <= 'Z') || 
              (current >= 'a' && current <= 'z'))) {
            lettersDigits = false;
        }
    }

    if (!length) console.log("Password must be between 6 and 10 characters");
    if (!lettersDigits) console.log("Password must consist only of letters and digits");
    if (counterDigits < 2) console.log("Password must have at least 2 digits");

    if (length && lettersDigits && counterDigits >= 2) {
        console.log("Password is valid");
    }
}

PasswordValid(password);

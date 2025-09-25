let originalString = prompt();
let reverseString = "";

for (let i = originalString.length - 1; i >= 0; i--) {
    reverseString += originalString[i];
}

console.log(reverseString);

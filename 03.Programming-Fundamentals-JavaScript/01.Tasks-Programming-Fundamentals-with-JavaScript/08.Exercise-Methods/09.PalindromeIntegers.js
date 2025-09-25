let text = prompt();

while (text !== "END") {
    let len = text.length;
    let isPalindrome = true;

    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (text[i] !== text[len - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    console.log(isPalindrome ? "true" : "false");
    text = prompt();
}

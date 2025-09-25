let n = parseInt(prompt());
let openCount = 0;
let closeCount = 0;

for (let i = 0; i < n; i++) {
    let input = prompt();
    if (input === "(") {
        openCount++;
    } else if (input === ")") {
        closeCount++;
        if (openCount - closeCount !== 0) {
            console.log("UNBALANCED");
            break;
        }
    }
}

if (openCount === closeCount) {
    console.log("BALANCED");
} else if (openCount !== closeCount) {
    console.log("UNBALANCED");
}

let one = prompt().charAt(0);
let two = prompt().charAt(0);

if (one < two) {
    for (let i = one.charCodeAt(0) + 1; i < two.charCodeAt(0); i++) {
        process.stdout.write(String.fromCharCode(i) + " ");
    }
} else if (one > two) {
    for (let i = two.charCodeAt(0) + 1; i < one.charCodeAt(0); i++) {
        process.stdout.write(String.fromCharCode(i) + " ");
    }
}

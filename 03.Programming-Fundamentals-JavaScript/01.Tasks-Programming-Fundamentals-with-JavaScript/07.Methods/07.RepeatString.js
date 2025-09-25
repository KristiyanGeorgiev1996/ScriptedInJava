let text = prompt();
let count = Number(prompt());
repeatString(text, count);

function repeatString(text, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += text;
    }
    console.log(result);
}

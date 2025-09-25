let x = parseInt(prompt());

for (let i = 1; i <= x; i++) {
    let line = "";
    for (let j = 1; j < i; j++) {
        line += i + " ";
    }
    line += i;
    console.log(line);
}

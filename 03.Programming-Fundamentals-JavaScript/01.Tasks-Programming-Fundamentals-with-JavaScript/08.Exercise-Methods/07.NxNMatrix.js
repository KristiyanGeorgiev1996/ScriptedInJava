let n = Number(prompt());

for (let i = 0; i < n; i++) {
    let line = "";
    for (let k = 1; k < n; k++) {
        line += n + " ";
    }
    line += n;
    console.log(line);
}

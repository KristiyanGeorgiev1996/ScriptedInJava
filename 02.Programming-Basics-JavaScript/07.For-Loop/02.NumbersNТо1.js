let num = parseInt(require("fs").readFileSync(0, "utf8").trim());

for (let i = num; i >= 1; i--) {
    console.log(i);
}

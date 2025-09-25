let n = parseInt(prompt());

for (let i = 1; i <= n; i++) {
    let numbersOfWord = parseInt(prompt());

    if (numbersOfWord === 2) {
        process.stdout.write("a");
    } else if (numbersOfWord === 22) {
        process.stdout.write("b");
    } else if (numbersOfWord === 222) {
        process.stdout.write("c");
    } else if (numbersOfWord === 3) {
        process.stdout.write("d");
    } else if (numbersOfWord === 33) {
        process.stdout.write("e");
    } else if (numbersOfWord === 333) {
        process.stdout.write("f");
    } else if (numbersOfWord === 4) {
        process.stdout.write("g");
    } else if (numbersOfWord === 44) {
        process.stdout.write("h");
    } else if (numbersOfWord === 444) {
        process.stdout.write("i");
    } else if (numbersOfWord === 5) {
        process.stdout.write("j");
    } else if (numbersOfWord === 55) {
        process.stdout.write("k");
    } else if (numbersOfWord === 555) {
        process.stdout.write("l");
    } else if (numbersOfWord === 6) {
        process.stdout.write("m");
    } else if (numbersOfWord === 66) {
        process.stdout.write("n");
    } else if (numbersOfWord === 666) {
        process.stdout.write("o");
    } else if (numbersOfWord === 7) {
        process.stdout.write("p");
    } else if (numbersOfWord === 77) {
        process.stdout.write("q");
    } else if (numbersOfWord === 777) {
        process.stdout.write("r");
    } else if (numbersOfWord === 7777) {
        process.stdout.write("s");
    } else if (numbersOfWord === 8) {
        process.stdout.write("t");
    } else if (numbersOfWord === 88) {
        process.stdout.write("u");
    } else if (numbersOfWord === 888) {
        process.stdout.write("v");
    } else if (numbersOfWord === 9) {
        process.stdout.write("w");
    } else if (numbersOfWord === 99) {
        process.stdout.write("x");
    } else if (numbersOfWord === 999) {
        process.stdout.write("y");
    } else if (numbersOfWord === 9999) {
        process.stdout.write("z");
    } else if (numbersOfWord === 0) {
        process.stdout.write(" ");
    }

    numbersOfWord--;
    if (numbersOfWord === 0) {
        break;
    }
}

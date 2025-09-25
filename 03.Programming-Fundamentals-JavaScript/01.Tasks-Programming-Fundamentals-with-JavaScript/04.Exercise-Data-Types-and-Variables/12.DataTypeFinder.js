while (true) {
    let input = prompt();
    if (input === "END") {
        break;
    }

    if (!isNaN(parseInt(input)) && Number.isInteger(Number(input))) {
        console.log(`${input} is integer type`);
    } else if (!isNaN(parseFloat(input))) {
        console.log(`${input} is floating point type`);
    } else if (input === "true" || input === "false") {
        console.log(`${input} is boolean type`);
    } else if (input.length === 1) {
        console.log(`${input} is character type`);
    } else {
        console.log(`${input} is string type`);
    }
}

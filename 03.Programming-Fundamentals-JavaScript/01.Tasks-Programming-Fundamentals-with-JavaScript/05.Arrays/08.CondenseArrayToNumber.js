let mainMasiv = prompt().split(' ').map(Number);

if (mainMasiv.length === 1) {
    console.log(mainMasiv[0]);
} else {
    while (mainMasiv.length > 1) {
        let condensedMasiv = [];
        for (let i = 0; i < mainMasiv.length - 1; i++) {
            condensedMasiv[i] = mainMasiv[i] + mainMasiv[i + 1];
        }
        mainMasiv = condensedMasiv;
    }
    console.log(mainMasiv[0]);
}

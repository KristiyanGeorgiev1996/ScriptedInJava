let n = parseInt(prompt());
let vowels = "EeUuIiOoAa";
let arrayOfSums = [];

for (let i = 0; i < n; i++) {
    let name = prompt();
    let sumVowels = 0;
    let sumConsonant = 0;

    for (let j = 0; j < name.length; j++) {
        let currentLetter = name[j];
        if (vowels.includes(currentLetter)) {
            sumVowels += currentLetter.charCodeAt(0) * name.length;
        } else {
            sumConsonant += Math.floor(currentLetter.charCodeAt(0) / name.length);
        }
    }

    arrayOfSums.push(sumVowels + sumConsonant);
}

arrayOfSums.sort((a, b) => a - b);

for (let val of arrayOfSums) {
    console.log(val);
}

const names = ["Peter", "Michell", "Jane", "Steve"];
const places = ["Sofia", "Plovdiv", "Varna", "Burgas"];
const verbs = ["eats", "holds", "sees", "plays with", "brings"];
const nouns = ["stones", "cake", "apple", "laptop", "bikes"];
const adverbs = ["slowly", "diligently", "warmly", "sadly", "rapidly"];
const details = ["near the river", "at home", "in the park"];

function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log("Welcome to the Random Sentence Generator!");
console.log("Press [Enter] to generate a new sentence or type 'exit' to quit.\n");

while (true) {
    let randomName = getRandomWord(names);
    let randomPlace = getRandomWord(places);
    let randomAdverb = getRandomWord(adverbs);
    let randomVerb = getRandomWord(verbs);
    let randomNoun = getRandomWord(nouns);
    let randomDetail = getRandomWord(details);

    let sentence = `${randomName} from ${randomPlace} ${randomAdverb} ${randomVerb} ${randomNoun} ${randomDetail}.`;
    console.log(sentence);

    let userInput = prompt("Press [Enter] to generate another sentence or type 'exit' to quit:").trim().toLowerCase();
    if (userInput === "exit") {
        console.log("Thanks for using the Random Sentence Generator. Goodbye!");
        break;
    }
    console.log();
}

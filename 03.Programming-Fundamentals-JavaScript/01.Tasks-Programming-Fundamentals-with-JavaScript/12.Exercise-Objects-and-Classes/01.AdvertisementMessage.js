const readline = require('readline');

const phrases = [
    "Excellent product.", "Such a great product.", "I always use that product.",
    "Best product of its category.", "Exceptional product.", "I can't live without this product."
];

const events = [
    "Now I feel good.", "I have succeeded with this product.", "Makes miracles. I am happy of the results!",
    "I cannot believe but now I feel awesome.", "Try it yourself, I am very satisfied.", "I feel great!"
];

const authors = ["Diana", "Petya", "Stella", "Elena", "Katya", "Iva", "Annie", "Eva"];

const cities = ["Burgas", "Sofia", "Plovdiv", "Varna", "Ruse"];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number of messages to generate: ", (answer) => {
    const numberOfMessages = parseInt(answer);
    for (let i = 0; i < numberOfMessages; i++) {
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        const eventText = events[Math.floor(Math.random() * events.length)];
        const author = authors[Math.floor(Math.random() * authors.length)];
        const city = cities[Math.floor(Math.random() * cities.length)];

        const message = `${phrase} ${eventText} ${author} – ${city}.`;
        console.log(message);
    }
    rl.close();
});

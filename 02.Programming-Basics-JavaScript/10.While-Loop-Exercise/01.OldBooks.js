let favoriteBook = prompt();

let isFound = false;
let bookCounter = 0;

let input = prompt();

while (input !== "No More Books") {
    if (input === favoriteBook) {
        isFound = true;
        break;
    }

    bookCounter++;

    input = prompt();
}

if (isFound) {
    console.log(`You checked ${bookCounter} books and found it.`);
} else {
    console.log("The book you search is not here!");
    console.log(`You checked ${bookCounter} books.`);
}

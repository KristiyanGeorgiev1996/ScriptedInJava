let datesString = "12-Jan-2020, 05/Feb/2021, 23.Mar.2022";
let pattern = /\b(\d{2})([.\/-])([A-Z][a-z]{2})\2(\d{4})\b/g;

let matches;
while ((matches = pattern.exec(datesString)) !== null) {
    let day = matches[1];
    let month = matches[3];
    let year = matches[4];
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
}

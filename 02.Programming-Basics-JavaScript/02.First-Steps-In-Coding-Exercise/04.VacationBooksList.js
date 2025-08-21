let bookPages = Number(prompt());
let pagesPerHour = Number(prompt());
let daysToRead = Number(prompt());

let readingHoursForDay = bookPages / pagesPerHour / daysToRead;
console.log(readingHoursForDay);

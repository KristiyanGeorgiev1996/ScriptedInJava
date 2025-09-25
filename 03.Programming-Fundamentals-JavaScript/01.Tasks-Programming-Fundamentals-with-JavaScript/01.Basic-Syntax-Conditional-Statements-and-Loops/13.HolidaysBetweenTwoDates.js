let startDateParts = prompt().split(".").map(Number);
let endDateParts = prompt().split(".").map(Number);

let startDate = new Date(startDateParts[2], startDateParts[1] - 1, startDateParts[0]);
let endDate = new Date(endDateParts[2], endDateParts[1] - 1, endDateParts[0]);

let holidaysCount = 0;

for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    let day = date.getDay();
    if (day === 0 || day === 6) {
        holidaysCount++;
    }
}

console.log(holidaysCount);

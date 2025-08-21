let hour = Number(prompt("Enter the hour:"));
let dayOfWeek = prompt("Enter the day of the week:");

if (hour >= 10 && hour <= 18) {
    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            console.log("open");
            break;
        case "Sunday":
            console.log("closed");
            break;
        default:
            console.log("closed");
            break;
    }
} else {
    console.log("closed");
}

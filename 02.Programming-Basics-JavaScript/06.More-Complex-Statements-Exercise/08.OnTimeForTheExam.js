// Input
let examHour = Number(prompt());
let examMinutes = Number(prompt());
let studentHour = Number(prompt());
let studentMinutes = Number(prompt());

// Calculations
let examTimeInMinutes = examHour * 60 + examMinutes;
let studentTimeInMinutes = studentHour * 60 + studentMinutes;

if (examTimeInMinutes < studentTimeInMinutes) { // Late
    console.log("Late");
    let minutesLate = studentTimeInMinutes - examTimeInMinutes;

    if (minutesLate < 60) {
        console.log(`${minutesLate} minutes after the start`);
    } else {
        let hoursLate = Math.floor(minutesLate / 60);
        minutesLate = minutesLate % 60;

        if (minutesLate < 10) {
            console.log(`${hoursLate}:0${minutesLate} hours after the start`);
        } else {
            console.log(`${hoursLate}:${minutesLate} hours after the start`);
        }
    }
} else {
    let minutesBefore = examTimeInMinutes - studentTimeInMinutes;

    if (minutesBefore === 0) { // Exactly on time
        console.log("On time");
    } else if (minutesBefore <= 30) { // Up to 30 minutes before the start
        console.log("On time");
        console.log(`${minutesBefore} minutes before the start`);
    } else { // Early
        console.log("Early");

        let hoursBefore = Math.floor(minutesBefore / 60);
        minutesBefore = minutesBefore % 60;

        if (hoursBefore === 0 && minutesBefore < 60) { // Early 31 to 59 minutes before
            console.log(`${minutesBefore} minutes before the start`);
        } else if (minutesBefore < 10) { // Early above 1 hour before
            console.log(`${hoursBefore}:0${minutesBefore} hours before the start`);
        } else {
            console.log(`${hoursBefore}:${minutesBefore} hours before the start`);
        }
    }
}

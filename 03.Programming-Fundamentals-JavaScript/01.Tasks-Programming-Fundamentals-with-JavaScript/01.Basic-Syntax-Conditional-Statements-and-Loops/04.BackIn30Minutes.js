let hours = parseInt(prompt());
let minutes = parseInt(prompt());

minutes += 30;
if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
}
if (hours >= 24) {
    hours -= 24;
}

if (minutes >= 0 && minutes <= 9) {
    console.log(hours + ":0" + minutes);
} else {
    console.log(hours + ":" + minutes);
}

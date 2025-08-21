let hours = Number(prompt());
let minutes = Number(prompt());

if (minutes >= 45) {
    hours++;
    minutes = (minutes + 15) % 60;
} else {
    minutes += 15;
}

if (hours === 24) {
    hours = 0;
}

if (minutes < 10) {
    console.log(`${hours}:0${minutes}`);
} else {
    console.log(`${hours}:${minutes}`);
}

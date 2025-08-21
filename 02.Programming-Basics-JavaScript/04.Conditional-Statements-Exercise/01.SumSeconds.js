let firstPlayerTime = Number(prompt());
let secondPlayerTime = Number(prompt());
let thirdPlayerTime = Number(prompt());

let timeInSeconds = firstPlayerTime + secondPlayerTime + thirdPlayerTime;
let minutes = Math.floor(timeInSeconds / 60);
let seconds = timeInSeconds % 60;

if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
} else {
    console.log(`${minutes}:${seconds}`);
}

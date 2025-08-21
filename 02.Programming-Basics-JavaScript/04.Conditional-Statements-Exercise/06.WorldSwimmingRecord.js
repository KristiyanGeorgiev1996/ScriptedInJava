// Input
let recordInSeconds = Number(prompt("Enter world record in seconds:"));
let metersToSwim = Number(prompt("Enter distance to swim in meters:"));
let secondsForOneMeterSwim = Number(prompt("Enter time for 1 meter in seconds:"));

// Calculations
let swimSecondsWithoutDelay = metersToSwim * secondsForOneMeterSwim;
let delayTimes = Math.floor(metersToSwim / 15);

let swimSeconds = swimSecondsWithoutDelay + delayTimes * 12.5;

// Output
if (swimSeconds < recordInSeconds) {
    console.log(`Yes, he succeeded! The new world record is ${swimSeconds.toFixed(2)} seconds.`);
} else {
    let neededSeconds = swimSeconds - recordInSeconds;
    console.log(`No, he failed! He was ${neededSeconds.toFixed(2)} seconds slower.`);
}

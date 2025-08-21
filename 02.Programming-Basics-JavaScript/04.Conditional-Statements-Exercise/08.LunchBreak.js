// Input
let seriesName = prompt("Enter series name:");
let episodeLength = Number(prompt("Enter episode length in minutes:"));
let breakLength = Number(prompt("Enter break length in minutes:"));

// Calculations
let lunchTime = breakLength / 8.0;
let freeTime = breakLength / 4.0;
let allNeededTime = lunchTime + freeTime + episodeLength;

// Output
if (breakLength >= allNeededTime) {
    let remainingTime = Math.ceil(breakLength - allNeededTime);
    console.log(`You have enough time to watch ${seriesName} and left with ${remainingTime} minutes free time.`);
} else {
    let neededTime = Math.ceil(allNeededTime - breakLength);
    console.log(`You don't have enough time to watch ${seriesName}, you need ${neededTime} more minutes.`);
}

let nums = prompt().split(" ").map(Number);

let timeL = 0;
let timeR = 0;

for (let i = 0; i < Math.floor(nums.length / 2); i++) {
    timeL += nums[i];
    if (nums[i] === 0) {
        timeL *= 0.8;
    }
}

for (let i = nums.length - 1; i > Math.floor(nums.length / 2); i--) {
    timeR += nums[i];
    if (nums[i] === 0) {
        timeR *= 0.8;
    }
}

if (timeL < timeR) {
    console.log(`The winner is left with total time: ${timeL}`);
} else {
    console.log(`The winner is right with total time: ${timeR}`);
}

let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let n = parseInt(prompt());

if (n >= 1 && n <= 7) {
    console.log(daysOfWeek[n - 1]);
} else {
    console.log("Invalid day!");
}

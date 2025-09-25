let walkingSteps = 0;

while (walkingSteps < 10000) {
    let input = prompt();

    if (input === "Going home") {
        let stepsToHome = parseInt(prompt());
        walkingSteps += stepsToHome;
        break;
    }

    let currentSteps = parseInt(input);
    walkingSteps += currentSteps;
}

if (walkingSteps >= 10000) {
    let stepsOverGoal = walkingSteps - 10000;

    console.log("Goal reached! Good job!");
    console.log(`${stepsOverGoal} steps over the goal!`);
} else {
    let stepsToGoal = 10000 - walkingSteps;

    console.log(`${stepsToGoal} more steps to reach goal.`);
}

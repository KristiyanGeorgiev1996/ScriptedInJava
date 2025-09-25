let groupsCount = parseInt(prompt());

let peopleCount = 0;

let peopleMusala = 0;
let peopleMonblan = 0;
let peopleKilimandzharo = 0;
let peopleK2 = 0;
let peopleEverest = 0;

for (let i = 1; i <= groupsCount; i++) {
    let currentPeopleCount = parseInt(prompt());
    peopleCount += currentPeopleCount;

    if (currentPeopleCount <= 5) {
        peopleMusala += currentPeopleCount;
    } else if (currentPeopleCount >= 6 && currentPeopleCount <= 12) {
        peopleMonblan += currentPeopleCount;
    } else if (currentPeopleCount >= 13 && currentPeopleCount <= 25) {
        peopleKilimandzharo += currentPeopleCount;
    } else if (currentPeopleCount >= 26 && currentPeopleCount <= 40) {
        peopleK2 += currentPeopleCount;
    } else if (currentPeopleCount >= 41) {
        peopleEverest += currentPeopleCount;
    }
}

let percentMusala = (peopleMusala / peopleCount) * 100;
let percentMonblan = (peopleMonblan / peopleCount) * 100;
let percentKilimandzharo = (peopleKilimandzharo / peopleCount) * 100;
let percentK2 = (peopleK2 / peopleCount) * 100;
let percentEverest = (peopleEverest / peopleCount) * 100;

console.log(`${percentMusala.toFixed(2)}%`);
console.log(`${percentMonblan.toFixed(2)}%`);
console.log(`${percentKilimandzharo.toFixed(2)}%`);
console.log(`${percentK2.toFixed(2)}%`);
console.log(`${percentEverest.toFixed(2)}%`);

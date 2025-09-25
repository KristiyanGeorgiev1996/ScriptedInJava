let power = parseInt(prompt());
let distance = parseInt(prompt());
let exhaustionFactor = parseInt(prompt());

let restPower = power;
let targetsCount = 0;

while (restPower >= distance) {
    if (restPower === power * 0.5 && exhaustionFactor !== 0) {
        restPower /= exhaustionFactor;
    }
    if (restPower < distance) {
        break;
    }
    restPower -= distance;
    targetsCount++;
}

console.log(restPower);
console.log(targetsCount);

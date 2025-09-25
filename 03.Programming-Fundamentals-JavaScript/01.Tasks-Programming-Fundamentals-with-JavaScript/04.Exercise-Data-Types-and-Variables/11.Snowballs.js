let n = parseInt(prompt());

let bestSnow = 0;
let bestTime = 0;
let bestQuality = 0;
let bestValue = 0n;

for (let i = 0; i < n; i++) {
    let snow = parseInt(prompt());
    let time = parseInt(prompt());
    let quality = parseInt(prompt());

    let value = BigInt(Math.floor(snow / time)) ** BigInt(quality);

    if (bestValue < value) {
        bestValue = value;
        bestQuality = quality;
        bestSnow = snow;
        bestTime = time;
    }
}

console.log(`${bestSnow} : ${bestTime} = ${bestValue} (${bestQuality})`);

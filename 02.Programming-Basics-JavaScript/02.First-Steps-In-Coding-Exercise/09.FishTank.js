let length = Number(prompt());
let width = Number(prompt());
let height = Number(prompt());
let percent = Number(prompt());

let aquariumVolume = length * width * height;
let aquariumLitersVolume = aquariumVolume / 1000;
let takenSpace = aquariumLitersVolume * (percent / 100);

let neededLiters = aquariumLitersVolume - takenSpace;
console.log(neededLiters);

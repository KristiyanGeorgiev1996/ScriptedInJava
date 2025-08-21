let age = Number(prompt("Enter age:"));
let gender = prompt("Enter gender (m/f):");

if (gender === 'm') {
    if (age >= 16) {
        console.log("Mr.");
    } else {
        console.log("Master");
    }
} else if (gender === 'f') {
    if (age >= 16) {
        console.log("Ms.");
    } else {
        console.log("Miss");
    }
}

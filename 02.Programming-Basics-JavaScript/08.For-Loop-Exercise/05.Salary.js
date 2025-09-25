let tabsOpened = parseInt(prompt());
let salary = parseInt(prompt());

for (let i = 1; i <= tabsOpened; i++) {
    let currentSite = prompt();

    if (currentSite === "Facebook") {
        salary -= 150;
    } else if (currentSite === "Instagram") {
        salary -= 100;
    } else if (currentSite === "Reddit") {
        salary -= 50;
    }

    if (salary <= 0) {
        console.log("You have lost your salary.");
        break;
    }
}

if (salary > 0) {
    console.log(salary);
}

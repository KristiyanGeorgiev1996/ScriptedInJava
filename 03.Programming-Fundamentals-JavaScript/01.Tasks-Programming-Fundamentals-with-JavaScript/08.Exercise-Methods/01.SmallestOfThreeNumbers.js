let first = Number(prompt());
let second = Number(prompt());
let third = Number(prompt());

function WhatIsLow(first, second, third) {
    if (first <= second && first <= third) {
        console.log(first);
    } else if (second <= first && second <= third) {
        console.log(second);
    } else if (third <= first && third <= second) {
        console.log(third);
    }
}

WhatIsLow(first, second, third);

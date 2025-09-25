let movieName = "";

let studentTickets = 0;
let standardTickets = 0;
let kidTickets = 0;
let totalTickets = 0;

while ((movieName = prompt()) !== "Finish") {
    let seatsCount = parseInt(prompt());
    let ticketType = prompt();
    let soldTickets = 0;

    while (ticketType !== "End") {
        soldTickets++;

        switch (ticketType) {
            case "student":
                studentTickets++;
                break;
            case "standard":
                standardTickets++;
                break;
            case "kid":
                kidTickets++;
                break;
        }

        if (soldTickets === seatsCount) {
            break;
        }

        ticketType = prompt();
    }

    totalTickets += soldTickets;
    console.log(`${movieName} - ${(soldTickets / seatsCount * 100).toFixed(2)}% full.`);
}

console.log(`Total tickets: ${totalTickets}`);
console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);

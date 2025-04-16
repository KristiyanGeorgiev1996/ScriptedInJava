function theatrePromotions(dayType, age) {
    let price;
    
    if (age < 0 || age > 122) {
        console.log('Error!');
        return; 
    }

    if (age >= 0 && age <= 18) {
        // Day type is Weekday
        if (dayType === 'Weekday') {
            price = 12.00;
        // Day type is Weekend
        } else if (dayType === 'Weekend') {
            price = 15.00;
        // Day type is Holiday
        } else if (dayType === 'Holiday') {
            price = 5.00;
        }

    } else if (age > 18 && age <= 64) {
        // Day type is Weekday
        if (dayType === 'Weekday') {
            price = 18.00;
        // Day type is Weekend
        } else if (dayType === 'Weekend') {
            price = 20.00;
        // Day type is Holiday
        } else if (dayType === 'Holiday') {
            price = 12.00;
        }

    } else if (age > 64 && age <= 122) {
        if (dayType === 'Weekday') {
            price = 12.00;
        } else if (dayType === 'Weekend') {
            price = 15.00;
        } else if (dayType === 'Holiday') {
            price = 10.00;
        }
    }

    console.log(`${price}$`);
}
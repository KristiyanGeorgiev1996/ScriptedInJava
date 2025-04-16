function solve(data){
    let countOfPeople = data[0];
    let group = data[1];
    let dayOfWeek = data[2];

    let totalPrice = 0;

    if (group === 'Students'){
        if (dayOfWeek === 'Friday'){
            totalPrice = countOfPeople * 8.45;
        } else if (dayOfWeek === 'Saturday'){
            totalPrice = countOfPeople * 9.80;
        }else if (dayOfWeek === 'Sunday'){
            totalPrice = countOfPeople * 10.46;
        }

        if (countOfPeople >= 30){
            totalPrice *= 0.85;  // 15% discount
        }
    } else if  (group === 'Business'){
        if (countOfPeople >= 100){
            countOfPeople -= 10;  // 10 free nights
        }

        if (dayOfWeek === 'Friday'){
            totalPrice = countOfPeople * 10.90;
        } else if (dayOfWeek === 'Saturday'){
            totalPrice = countOfPeople * 15.60;
        }else if (dayOfWeek === 'Sunday'){
            totalPrice = countOfPeople * 16;
        }
    } else if  (group === 'Regular'){
        if (dayOfWeek === 'Friday'){
            totalPrice = countOfPeople * 15;
        } else if (dayOfWeek === 'Saturday'){
            totalPrice = countOfPeople * 20;
        }else if (dayOfWeek === 'Sunday'){
            totalPrice = countOfPeople * 22.50;
        }

        if (countOfPeople >= 10 && countOfPeople <= 20){
            totalPrice *= 0.95;  // 5% discount
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
function solve(product, quantity){
    let price = 0;

    switch(product){
        case 'coffee': price = 1.50; break;
        case 'water': price = 1; break;
        case 'coke': price = 1.40; break;
        case 'snacks': price = 2; break;
    }

    let finalPrice = price * quantity

    console.log(finalPrice.toFixed(2))
}
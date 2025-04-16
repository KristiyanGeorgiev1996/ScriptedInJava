function solve(text, word){
    let counter = 0;

    let strArr = text.split(' ');

    for (let element of strArr){
        if (element === word){
            counter++;
        }
    }

    console.log(counter)
}
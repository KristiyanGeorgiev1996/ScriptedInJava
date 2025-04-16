function solve(data) {
    let arr = data.map((el) => Number(el));

    let result = [];

    arr.sort((a,b) => a - b);
    let length = arr.length - 1;

    for (let i = 0; i <= length / 2; i++) {

        if (arr.length % 2 !== 0) {

            if (i == length / 2) {
                result.push(arr[i]);
            } else {
                result.push(arr[i]);
                result.push(arr[length - i]);
            }
            
        } else {
            result.push(arr[i]);
            result.push(arr[length - i]);
        }
       
    }

    return result.join("\n") 
}
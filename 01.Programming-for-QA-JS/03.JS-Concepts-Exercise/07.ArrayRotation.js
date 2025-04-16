function solve(arr, rotations){
    for(i = 0; i < rotations; i++){
        let element = arr.shift();   
        arr.push(element);           
    }

    console.log(arr.join(' '));
}

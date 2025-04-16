function solve(arr){
    let strArr = arr.filter((el) => el !== '')
    let step = Number(arr[strArr.length - 1])

    let result = [];

    for(let i = 0; i < strArr.length - 1; i+=step){
        result.push(strArr[i])
    }

    console.log(result.join('\n'))
}
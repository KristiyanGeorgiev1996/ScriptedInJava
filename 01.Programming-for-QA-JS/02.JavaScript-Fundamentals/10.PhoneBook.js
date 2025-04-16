function solve(arr){
    let phoneBook = {};

    for (const element of arr) {
        let [name, phoneNumber] = element.split(' ');
        phoneBook[name] = phoneNumber;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}
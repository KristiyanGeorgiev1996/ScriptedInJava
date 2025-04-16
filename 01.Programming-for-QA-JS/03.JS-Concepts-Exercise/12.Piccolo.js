function solve(data){
    let parkingLot = {};

    for (const element of data) {
        let [direction, carNumber] = element.split(', ')

        if (direction === 'IN'){
            parkingLot[carNumber] = carNumber;
        } else if (direction === 'OUT'){
            delete parkingLot[carNumber]
        }
    }

    let sortedParkigLot = Object.values(parkingLot).sort((a, b) => a.localeCompare(b))

    if (sortedParkigLot.length === 0){
        console.log("Parking Lot is Empty")
    } else {

        for (const key of sortedParkigLot) {
            console.log(key)
        }
    }
}
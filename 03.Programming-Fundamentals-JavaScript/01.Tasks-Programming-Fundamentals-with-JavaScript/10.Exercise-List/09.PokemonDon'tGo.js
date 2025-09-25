let list = prompt().split(' ').map(Number);
let sum = 0;

while (list.length > 0) {
    let pokemonIndex = Number(prompt());
    let removedElement;
    let firstElement = list[0];
    let lastElement = list[list.length - 1];

    if (pokemonIndex < 0) {
        removedElement = firstElement;
        list.shift();
        list.unshift(lastElement);
    } else if (pokemonIndex >= list.length) {
        removedElement = lastElement;
        list.pop();
        list.push(firstElement);
    } else {
        removedElement = list[pokemonIndex];
        list.splice(pokemonIndex, 1);
    }

    sum += removedElement;

    for (let i = 0; i < list.length; i++) {
        if (list[i] <= removedElement) {
            list[i] += removedElement;
        } else {
            list[i] -= removedElement;
        }
    }
}

console.log(sum);

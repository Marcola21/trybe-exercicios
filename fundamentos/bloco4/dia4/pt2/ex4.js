let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function biggestName(array) {
    let bigN = 0
    for (let index = 0; index < array.length; index ++) {
        if (array[index].length > array[bigN].length) {
            bigN = index
        }
    }
    console.log(bigN);
}

biggestName(names)
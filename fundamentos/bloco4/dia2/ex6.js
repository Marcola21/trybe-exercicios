let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numImp = []

for (let index = 0; index < numbers.length; index ++) {
    if (numbers[index] % 2 == 0) {
        numImp.push(numbers[index])
    }
}

if (numImp.length < 0) {
    console.log("Nenhum valor impar encontrado")
} else {
    console.log("Esta lista possue " + numImp.length + " números Impares")
}


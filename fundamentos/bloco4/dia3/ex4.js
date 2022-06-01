let primeList = []

for (let index = 0; index <= 50; index ++) {
    let primo = true;
    for (let divisor = 2; divisor < index; divisor += 1) {
      if (index % divisor == 0) {
        primo = false;
      }
    }
    if (primo) {
      primeList.push(index)
    }
}

for (number of primeList) {
    biggest = 0
    if (number > biggest) {
        biggest = number
    }
}

console.log("O maior número primo de 2 a 50 é " + biggest);
  

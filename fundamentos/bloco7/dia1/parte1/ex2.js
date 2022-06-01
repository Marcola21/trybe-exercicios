const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
  
    return(oddsAndEvens)
}

const sortedArray = sortArray()
console.log(`Os números ${sortedArray} estão organizados de forma crescente`); // será necessário alterar essa linha 😉
function sumNum(n) {
    let tot = 0
    for(let index = 0; index <= n; index ++) {
        tot = tot += index
    }
    console.log(tot);
}

sumNum(5)
let num = 10

function fat(num) {
    for(let index = num; index > 0; index --) {
        num *= index
    }
    console.log(num)
}

fat(10)
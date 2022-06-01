let word = "tryber"
reverse = ''

function invert(p) {
    for(let index = 0; index < p.length; index ++) {
        reverse += p[p.length - 1 - index]
        
    }

    console.log(reverse);
}

invert(word)
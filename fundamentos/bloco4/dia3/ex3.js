let array = ['java', 'javascript', 'python', 'html', 'css'];
biggest = array[0]
smallest = array[0]

for(let index = 0; index < array.length; index ++) {
    if(array[index].length > biggest.length) {
        biggest = array[index]
    }
}

for(let index = 0; index < array.length; index ++) {
    if(array[index].length < smallest.length) {
        smallest = array[index]
    }
}

console.log(biggest);
console.log(smallest)


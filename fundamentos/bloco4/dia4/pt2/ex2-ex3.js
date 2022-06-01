let numbers = [2, 3, 6, 7, 10, 1];

function biggestIndex(array) {
	let BigI = 0
	for (let index = 0; index < numbers.length; index ++) {
		if (array[index] > array[BigI]) {
			BigI = index
		}
	}

	console.log(BigI)
}

function smallestIndex(array) {
	let smallI = 0
	for (let index = 0; index < numbers.length; index ++) {
		
		if (array[index] < array[smallI]) {
			smallI = index
		}
	}

	console.log(smallI)
}

biggestIndex(numbers)
smallestIndex(numbers)
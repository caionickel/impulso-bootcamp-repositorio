function returnEvenNumbers(array) {
    let evenNums = []
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNums.push(array[i])
        } else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('os números pares são:', evenNums)
}

let array = [1, 2, 3, 4, 5, 6, 7]

returnEvenNumbers(array)

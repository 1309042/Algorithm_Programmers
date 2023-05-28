function solution(arr, divisor) {
    
    let correct = []
    let discorrect = [-1]

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) {
            correct.push(arr[i])
        }
    }

    if(correct.length > 0) {
        correct.sort((a, b) => a - b)
        return correct
    
    } else {
        return discorrect
    }
}

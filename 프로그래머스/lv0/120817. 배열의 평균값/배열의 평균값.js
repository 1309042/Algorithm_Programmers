function solution(numbers) {

    let sum = 0;
    let avg = 0;
    let len = numbers.length 
    
    for(let i = 0; i < len; i++) {
        sum += numbers[i]
    }
    console.log(sum)
    avg = sum / len
    return avg
}
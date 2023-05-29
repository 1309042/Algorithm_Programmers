function solution(numbers) {
    let num = [];
    let notNum = [];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        num.push(numbers[i]);
    }

    for (let i = 0; i <= 9; i++) {
        if (!num.includes(i)) {
            notNum.push(i);
        }
    }

    for (let i = 0; i < notNum.length; i++) {
        sum += notNum[i];
    }

    return sum;
}

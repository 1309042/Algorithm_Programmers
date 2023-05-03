function solution(arr) {
    
    // 최대공약수
    function maxNum(a, b) {
        if(a % b === 0) {
            return b;
        } else {
            return maxNum(b, a % b);
        }
    }
    
    // 최소공배수
    function minNum(a, b) {
        return (a * b) / maxNum(a, b);
    }
    
    let answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
        answer = minNum(answer, arr[i]);
    }
    
    return answer;
}
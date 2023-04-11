function solution(x, n) {
    let answer = []
    let str = 0;    

    for(let i = 0; str < n; i++) {
        str++;
        answer.push(x * str)
    }
    
    return answer;
}
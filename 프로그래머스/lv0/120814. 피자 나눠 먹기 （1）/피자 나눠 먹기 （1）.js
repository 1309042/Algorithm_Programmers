function solution(n) {
    let whole = parseInt(n / 7); 
    let remainder = n % 7; 

    if (remainder > 0) {
        whole++;
    }

    return whole;
}

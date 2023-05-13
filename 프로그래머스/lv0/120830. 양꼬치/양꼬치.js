function solution(n, k) {
    
    let service = parseInt(n / 10);
    
    for(let i = 0; i < n; i++) {
        let sum = (n * 12000) + (k * 2000) - (service * 2000);
        return sum
    }

}
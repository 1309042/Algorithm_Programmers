function solution(n) {
  
    let current = n.toString(2).match(/1/g).length;
    let nextNum = n + 1;

    for(let i = 0; i < n; i++) {
        let next = nextNum.toString(2).match(/1/g).length;
        
        if(current === next) {
        return nextNum;
        }
    nextNum++;
    }
}
function solution(n) {
    
    let str = Array.from(n.toString());
    
    let newStr = str.sort((a, b) => b - a).join("");
    
    return parseInt(newStr);
}

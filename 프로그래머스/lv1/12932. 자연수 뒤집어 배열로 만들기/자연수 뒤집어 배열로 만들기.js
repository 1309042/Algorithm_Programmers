function solution(n) {
    let arr = n.toString(); // 숫자를 문자열로 바꿔줌
    let result = []; // 배열로 받는 변수

    for (let i = arr.length - 1; 0 <= i; i--) {
        result.push(Number(arr[i]));
    }
    
    return result;
}

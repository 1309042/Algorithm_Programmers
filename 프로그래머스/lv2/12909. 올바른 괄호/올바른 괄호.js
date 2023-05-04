function solution(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        
        let str = s[i];
        
        if (str === '(') {
            stack.push(str);
        
        } else if (str === ')') {
            if (stack.length === 0 || stack.pop() !== '(') {
                return false;
            }
        }
    }

    return stack.length === 0;
}
/* 테스트 케이스 실패

    let first_char = s.charAt(0);
    let last_char = s.charAt(s.length - 1);
    
    if(first_char === "(" && last_char === ")") {
        return true;
    } else {
        return false;
    }
*/

/* 효율성 테스트 실패
        
    let stack = [];
    let first = s.charAt(0);
    let last = s.charAt(s.length-1);

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
        } else if (s[i] === ')') {
            if (stack.length > 0 && stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
*/
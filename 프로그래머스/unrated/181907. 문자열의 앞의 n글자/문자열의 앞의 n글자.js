function solution(my_string, n) {
    let stack = '';

    for (let i = 0; i < n; i++) {
        stack += my_string[i];
    }

    return stack;
}
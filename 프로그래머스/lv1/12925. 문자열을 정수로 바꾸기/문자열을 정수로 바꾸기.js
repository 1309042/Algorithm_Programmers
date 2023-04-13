function solution(s) {
    let str = "";

    if (s.length >= 1 && s.length <= 5) {
        if (s[0] === "-") {
            str = parseInt("-" + s.substring(1));
        } else if (!isNaN(parseInt(s))) {
            str = parseInt(s);
        }
    }
    return str;
}
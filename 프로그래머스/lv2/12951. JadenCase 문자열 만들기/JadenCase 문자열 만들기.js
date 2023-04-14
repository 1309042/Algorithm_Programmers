function solution(s) {
    
    let s_split = s.split(' ');
    let str = [];
    
    if (1 <= s.length && s.length <= 200) { 
        str = s_split.map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        return str.join(' ');
    } else {
        return '';
    }
    
    
}
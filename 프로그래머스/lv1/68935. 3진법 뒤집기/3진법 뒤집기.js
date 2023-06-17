function solution(n) {

    let three = n.toString(3);
    
    let reVerse = [...three].reverse().join('');;
    
    let ten = parseInt(reVerse,3);
    
    return ten;
}
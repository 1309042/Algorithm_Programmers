function solution(s){

    let pCnt = 0;
    let yCnt = 0;
    let str = s.toLowerCase(); // 소문자 변환
    
    for(let i = 0; i <= str.length; i++) {
        
        if(str[i] == 'p') {
            pCnt++;
        } else if (str[i] == 'y') {
            yCnt++;
        }
    }
    
    return pCnt == yCnt;
}
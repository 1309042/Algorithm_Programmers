function solution(participant, completion) {

    // 참여한 선수 이름 : participant
    // 완주한 선수 이름 : completion
    // 완주하지 못한 선수 이름 return
    
    // 참가자 정렬
    participant.sort();
    // 완주자 정렬
    completion.sort();

    // 참가자, 완주자 비교
    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            return participant[i]
        }
    }

}
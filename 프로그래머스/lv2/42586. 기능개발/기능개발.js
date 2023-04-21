function solution(progresses, speeds) {
    let days = [];
    
    for(let i = 0; i < progresses.length; i++) {
        let leftDays = 100 - progresses[i]
        let runDays = (leftDays / speeds[i]);
        days.push(Math.ceil(runDays));
    }
    
    let result = [];
    let count = 0;
    let maxDays = 0;
    
    for(let j = 0; j < days.length; j++) {
        let runDays = days[j];
        
        if(runDays > maxDays) {
            maxDays = runDays;
            if(count > 0) {
                result.push(count);
                count = 0;
            }
        }
        count++;
    }
    result.push(count);
    
    return result;
}
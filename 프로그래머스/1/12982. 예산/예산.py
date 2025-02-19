def solution(d, budget):
    d.sort()  #예산소트
    count = 0  
    
    for i in d:
        if budget >= i:  
            budget -= i
            count += 1
        else:  
            break
            
    return count

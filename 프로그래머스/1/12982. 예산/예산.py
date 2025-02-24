def solution(d, budget):
    x = sorted(d)  
    result = 0 
    for i in range(len(d)):
        if budget >= x[i]: 
            budget -= x[i]  
            result += 1  
        else:
            break  
    return result 

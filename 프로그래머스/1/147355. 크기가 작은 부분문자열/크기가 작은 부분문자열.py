def solution(t, p):
    p_len = len(p)  
    count = 0
    for i in range(len(t) - p_len + 1): 
        #print(t[i: i+p_len])  
        if(t[i:i + p_len] <= p):
            count += 1
    return count

def solution(a, b):
    sum = 0
    
    if a > b:  # a가 큰 경우
        for i in range(b, a + 1):
            sum += i
            
    else:  # b가 큰 경우
        for i in range(a, b + 1):
            sum += i
            
    return sum
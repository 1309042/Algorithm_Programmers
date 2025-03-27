def solution(n):
    x = []
    
    for i in range(2, n+1):
        if n % i == 1:
            x.append(i)
    return min(x)

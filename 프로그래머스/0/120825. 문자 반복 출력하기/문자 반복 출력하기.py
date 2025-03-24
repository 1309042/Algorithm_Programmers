def solution(my_string, n):
    x = list(my_string)
    z = ""
    
    for i in range(len(x)):
        z += x[i] * n 
    
    return z

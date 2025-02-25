def solution(array, height):
    x = sorted(array)
    print(x)
    result = 0
    
    for i in range(len(x)):
        if x[i] > height:
            result +=1
    return result
               
def solution(arr):
    m = min(arr)  

    if len(arr) == 1:  
        return [-1]

    arr.remove(m)
    return arr  
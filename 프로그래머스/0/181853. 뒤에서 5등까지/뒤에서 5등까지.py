def solution(num_list):
    x = sorted(num_list)
    print(x) 

    result = []
    for i in range(5): 
        result.append(x[i])  

    return result 

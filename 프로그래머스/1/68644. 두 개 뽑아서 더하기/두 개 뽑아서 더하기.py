def solution(numbers):
    result = [] 
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            sum_value = numbers[i] + numbers[j]
            result.append(sum_value)
            
    result = list(set(result))
    result.sort()
    
    return result

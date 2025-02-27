def solution(food):
    result = ""

    for i in range(1, len(food)):
        count = food[i] // 2  
        result += str(i) * count 

    return result + "0" + result[::-1]  


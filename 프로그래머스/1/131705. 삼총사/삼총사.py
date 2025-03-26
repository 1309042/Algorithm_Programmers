
def solution(number):
    total = 0
    x = len(number)
    
    for i in range(x):
        for j in range(i + 1, x):
            for z in range(j + 1, x):
                if number[i] + number[j] + number[z] == 0:
                    total += 1
    return total
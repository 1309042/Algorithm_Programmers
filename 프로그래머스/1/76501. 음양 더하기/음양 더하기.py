def solution(absolutes, signs):
    result = 0
    for i in range(len(absolutes)):
        if absolutes[i] > 0 and signs[i] == True:
            result += absolutes[i]
        else:
            result -= absolutes[i] 
    return result

def solution(array, n):
    x = 0
    for i in range(len(array)):
        if array[i] == n:
            x += 1
    return x

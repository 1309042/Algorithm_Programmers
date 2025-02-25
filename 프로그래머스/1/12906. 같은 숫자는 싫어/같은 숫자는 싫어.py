def solution(arr):
    x = []
    for i in range(len(arr)):
        if i == 0 or arr[i] != arr[i-1]:
            x.append(arr[i])
    return x
"""def solution(n):
    i = 0
    while i * i <= n:
        if i * i == n:
            return (i + 1) ** 2
        i += 1
    return -1"""
def solution(n):
    for i in range(n+1):
        current_square = i * i
        if current_square == n:
            return (i + 1) ** 2
        if current_square > n:
            break
    return -1
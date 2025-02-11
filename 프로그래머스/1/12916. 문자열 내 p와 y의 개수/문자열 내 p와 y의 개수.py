def solution(s):
    p갯수 = 0
    y갯수 = 0

    for i in s.lower():
        if i == "p":
            p갯수 += 1
        elif i == "y":
            y갯수 += 1
    
    if p갯수 == y갯수:
        return True   #주의! 파이썬은 대문자로 받음
    else:
        return False
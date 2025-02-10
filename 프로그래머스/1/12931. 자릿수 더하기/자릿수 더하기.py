def solution(n):
    num_str = str(n) # 우선 문자열로 바꾸기
    sum = 0
    for i in range(len(num_str)):
        sum += int(num_str[i])
    return sum



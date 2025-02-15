def solution(my_string, n):
    s = ""
    for i in range(len(my_string)):
        s += my_string[i]*n
    return s
        
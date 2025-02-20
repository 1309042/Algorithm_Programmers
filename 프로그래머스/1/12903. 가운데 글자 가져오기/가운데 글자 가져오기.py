def solution(s):
    s_len = len(s)
    x = s_len // 2
    
    if s_len % 2 == 0:
        return s[x-1] + s[x]
    else:
        return s[x]

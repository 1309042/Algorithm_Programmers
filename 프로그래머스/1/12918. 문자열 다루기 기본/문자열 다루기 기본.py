def solution(s):
    str_num = s.isdigit()
    str_len = len(s)
    
    if str_len == 4 or str_len == 6:
        if str_num:
            return True
    return False
    
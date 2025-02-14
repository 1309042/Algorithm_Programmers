def solution(str1, str2):
    대문자변환 = str1.upper()
    대문자변환2 = str2.upper()
    
    if 대문자변환2 in 대문자변환:  
        return 1
    else:
        return 2

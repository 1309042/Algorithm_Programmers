def solution(n):
    sorted_text = sorted(str(n), reverse=True) 
    print(''.join(sorted_text)) 
    return int(''.join(sorted_text))
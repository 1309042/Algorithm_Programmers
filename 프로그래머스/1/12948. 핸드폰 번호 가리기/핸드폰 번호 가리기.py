def solution(phone_number):
    ph_len = len(phone_number)
    가려줄애 = ph_len - 4
    
    result = '*' * 가려줄애 + phone_number[-4:]
    
    return result

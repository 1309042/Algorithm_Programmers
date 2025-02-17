def solution(x):
    x_str = list(str(x))
    #print(x_str)   #글자로 바꿈
    
    x_sum = 0 # 합치는 변수
    for i in x_str:
        x_sum += int(i)
        print(x_sum)
        
    if x % x_sum == 0:
        return True
    else:
        return False
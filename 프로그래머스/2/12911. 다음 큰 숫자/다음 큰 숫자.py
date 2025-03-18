def solution(n):
    x_count = bin(n).count('1')  # 1의 개수 저장

    def find_next(one_num):
        if bin(one_num).count('1') == x_count:
            return one_num  
        return find_next(one_num + 1) 

    return find_next(n + 1) 

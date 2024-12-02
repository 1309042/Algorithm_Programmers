H, M = map(int, input().split()) 

real = (H  * 60 + M) - 45

final_H = real // 60 # 몫만 나오게 수정
final_M = real % 60
    
if final_H < 0 :
   final_H += 24   
    
print(final_H, final_M)
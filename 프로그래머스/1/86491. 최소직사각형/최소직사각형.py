def solution(sizes):
    가로 = 0
    세로 = 0
    
    for i in sizes:
        x = max(i)
        y = min(i)
        
        가로 = max(가로, x)
        세로 = max(세로, y)
        
    return 가로 * 세로
        
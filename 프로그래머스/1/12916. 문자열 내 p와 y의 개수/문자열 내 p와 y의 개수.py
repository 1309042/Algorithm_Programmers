def solution(s):
    x_up = s.upper();
    p = 0
    y = 0
    
    for i in range(len(s)):
        if x_up[i].find('P'):
            p += 1
            
        if x_up[i].find('Y'):
            y += 1    
            
    if p == y:
        return True
    else:
        return False
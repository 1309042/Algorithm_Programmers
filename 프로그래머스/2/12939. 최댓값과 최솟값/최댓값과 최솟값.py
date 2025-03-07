def solution(s):
    x = s.split() 

    for i in range(len(x)):
        x[i] = int(x[i]) 

    min_ = min(x)
    max_ = max(x)

    return str(min_) + " " + str(max_)


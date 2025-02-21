def solution(num_list):
    n_sum = 0
    n_multy = 1
    
    for i in range(len(num_list)):
        n_sum += num_list[i]
    n_sum **= 2
    
    for i in range(len(num_list)):
        n_multy *= num_list[i]

    if n_multy < n_sum:
        return 1
    else:
        return 0
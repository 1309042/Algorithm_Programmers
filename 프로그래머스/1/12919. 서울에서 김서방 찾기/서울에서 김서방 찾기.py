def solution(seoul):
    if 'Kim' in seoul:
        #test = seoul.index('Kim')
        find_index = "김서방은 " + str(seoul.index('Kim')) + "에 있다"
        return str(find_index)
    else:
        print(False)
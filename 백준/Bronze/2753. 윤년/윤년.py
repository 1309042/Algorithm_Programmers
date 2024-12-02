a = int(input())

#4의 배수이면서 100의 배수가 아닐 때, 윤년
x = a % 4 
y = a % 100
z = a % 400

if(x == 0 and y != 0):
    print (1)
elif (z == 0):
    print (1)
else:
    print (0)
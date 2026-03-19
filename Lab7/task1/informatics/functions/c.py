def xor(x,y):
    if x + y == 1: return 1
    else: return 0
x, y = input().split()
x = int(x)
y = int(y)
print(xor(x, y))
v = int(input())
t = int(input())
s = v * t
if(s > 109 and v > 0):
    x = s-109
    print(x)
elif(v < 0):
    x = 109 + s
    print(x)
n = int(input())
count = 0
for i in range(1, n + 1):
    x = int(input())
    if(x == 0): count += 1
print(count)
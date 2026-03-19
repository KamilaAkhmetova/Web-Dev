def power(a, n):
    return a ** n
a, n = input().split()
a = float(a)               
n = int(n)
print(int(power(a, n)))
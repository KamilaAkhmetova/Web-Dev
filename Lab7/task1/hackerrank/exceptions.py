t = int(input())

for _ in range(t):
    try:
        a, b = input().split()
        a = int(a)
        b = int(b)
        print(a // b)
    except Exception as e:
        print("Error Code:", e)
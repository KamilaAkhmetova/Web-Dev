from collections import Counter

x = int(input())
sizes = list(map(int, input().split()))
shoe_count = Counter(sizes)

n = int(input())

money = 0

for _ in range(n):
    size, price = map(int, input().split())
    
    if shoe_count[size] > 0:
        money += price
        shoe_count[size] -= 1

print(money)
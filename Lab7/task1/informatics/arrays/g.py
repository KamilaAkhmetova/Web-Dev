n = int(input())
nums = input().split()

for i in range(n // 2):
    nums[i], nums[n - 1 - i] = nums[n - 1 - i], nums[i]

print(*nums)
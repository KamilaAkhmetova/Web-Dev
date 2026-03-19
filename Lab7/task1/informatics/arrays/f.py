n = int(input())
s = input()
nums = s.split()

count = 0

for i in range(1, n-1):
    if int(nums[i]) > int(nums[i-1]) and int(nums[i]) > int(nums[i+1]):
        count += 1

print(count)
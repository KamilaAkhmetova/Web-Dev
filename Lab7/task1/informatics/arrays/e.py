n = int(input())
s = input()
nums = s.split()

count = 0

for i in range(0, n-1):
    if int(nums[i]) > 0 and int(nums[i+1]) > 0 or int(nums[i]) < 0 and int(nums[i+1]) < 0:
        print("YES")
        count = 1
        break

if count == 0:
    print("NO")
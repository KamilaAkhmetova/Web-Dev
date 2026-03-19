n = int(input())  
s = input()       
nums = s.split()  

count = 0
for i in range(1, n):
    if int(nums[i]) > int(nums[i-1]):
        count += 1

print(count)
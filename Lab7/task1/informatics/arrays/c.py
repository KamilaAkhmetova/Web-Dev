n = int(input())  
s = input()       
nums = s.split()  

count = 0
for x in nums:
    if int(x) > 0:   
        count += 1

print(count)
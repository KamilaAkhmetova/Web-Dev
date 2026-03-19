import calendar

m, d, y = map(int, input().split())

day_index = calendar.weekday(y, m, d) 
day_name = calendar.day_name[day_index]

print(day_name.upper())
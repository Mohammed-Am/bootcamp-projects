birthdate = input("Enter your birthday, in this format DD/MM/YYYY: ")
day, month, year = birthdate.split("/") 
year = int(year)  

from datetime import date

today = date.today()
current_year = today.year
current_month = today.month
current_day = today.day

age = current_year - year

if (int(month), int(day)) > (current_month, current_day):
    age -= 1


candles_number = age % 10 
if candles_number == 0:
    candles_number = 10 


candles = 'i' * candles_number


def is_leap_year(y):
    return (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0)

leap = is_leap_year(year)


def print_cake(candles):
    print(f"       ___{candles}___")
    print("      |:H:a:p:p:y:|")
    print("    __|___________|__")
    print("   |^^^^^^^^^^^^^^^^^|")
    print("   |:B:i:r:t:h:d:a:y:|")
    print("   |                 |")
    print("   ~~~~~~~~~~~~~~~~~~~")

print_cake(candles)
if leap:
    print()
    print_cake(candles)

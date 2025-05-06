## Exercise 1
month = input("Enter a month between 1 to 12")

if month >=3 & month <=5 :
    print(' the season of the month is Spring')
elif  month >=6 & month <=8 :
    print(' the season of the month is Summer') 
elif month >=6 & month <=8 :
    print(' the season of the month is Autumn')  
elif month >=12 & month <=2 :
    print(' the season of the month is Winter')    
else 
    print('the nummber is not correct') 


## Exercise 2

numbers = range(1 , 21)
for number in numbers :
    print(number)


for number in numbers:
  if number % 2 == 0:
     print(number)

## Exercise 3

while True:
    name = input("What is your name? ")
    if name == "Mohammed":
        print("That's correct!")
        break
     elif name !== "Mohammed":
        print("Try again")
        break   


## Exercice 4 
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter your name: ")
if user_name in names:
    print(f"The index of the first occurrence of {user_name} is {names.index(user_name)}")
else:
    print("Name not found in the list.")


## Exercice 5 

user_input_1 = input("Enter number 1 ")
user_input_2 = input("Enter number 2 ")
user_input_3 = input("Enter number 3 ")

 if user_input_1 > user_input_2 and user_input_1 > user_input_3:
        print(f"The greatest number is {user_input_1}")
    elif user_input_2 > user_input_1 and user_input_2 > user_input_3:
        print(f"The greatest number is {user_input_2}")
    else:
        print(f"The greatest number is {user_input_3}")

## Exercice 6

wins = 0
losses = 0

while True:
    user_input = input("Enter a number from 1 to 9 or type 'quit' to exit ")
    if user_input.lower() == 'quit':
        break

    if not user_input.isdigit() or not (1 <= int(user_input) <= 9):
        print("Please enter a valid number between 1 and 9.")
        continue

    user_number = int(user_input)
    random_number = random.randint(1, 9)

    if user_number == random_number:
        print("Winner!")
        wins += 1
    else:
        print(f"Good luck next time. The correct number was {random_number}.")
        losses += 1

print(f"Total games won: {wins}")
print(f"Total games lost: {losses}")



birthdays = {
    "Alice": "1990/05/12",
    "Bob": "1985/07/23",
    "Charlie": "1992/11/15",
    "Diana": "1988/03/08",
    "Eve": "1995/09/30"
}

print("Welcome to the birthday lookup program!")
print("You can look up the birthdays of the people in the list!")

name = input("Enter a person's name: ")

birthday = birthdays.get(name)

if birthday:
    print(f"{name}'s birthday is on {birthday}.")
else:
    print(f"Sorry, we don't have {name}'s birthday in the list.")
# Dictionary containing names and their birthdays
birthdays = {
    "Alice": "1990-05-15",
    "Bob": "1985-09-23",
    "Charlie": "1992-12-01"
}

print("We have birthday information for the following people:")
for name in birthdays.keys():
    print(name)

person_name = input("Enter the name of the person you want the birthday information for: ")

if person_name in birthdays:
    print(f"{person_name}'s birthday is {birthdays[person_name]}.")
else:
    print(f"Sorry, we don’t have the birthday information for {person_name}.")
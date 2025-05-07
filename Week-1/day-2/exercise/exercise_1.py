#Ex1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

c = zip(keys, values)

print(tuple(c))


##Ex2

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0
for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    print(f"{name} has to pay ${cost}")
    total_cost += cost

print(f"The family's total cost for the movies is ${total_cost}")

family = {}
while True:
    name = input("Enter the family member's name (or type 'done' to finish): ")
    if name.lower() == 'done':
        break
    age = int(input(f"Enter {name}'s age: "))
    family[name] = age

total_cost = 0
for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    print(f"{name} has to pay ${cost}")
    total_cost += cost

print(f"The family's total cost for the movies is ${total_cost}")


##Ex3
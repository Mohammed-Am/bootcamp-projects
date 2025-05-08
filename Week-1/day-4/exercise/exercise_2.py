class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} kay3wiiii"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        his_power = other_dog.run_speed() * other_dog.weight
        if my_power > his_power:
            return f"{self.name} nachat"
        else:
            return f"{other_dog.name} 9ta3 lih jnah"

# Step 2
dog1 = Dog("Rocky", 5, 20)
dog2 = Dog("Simo", 3, 15)
dog3 = Dog("Nina", 4, 18)

# Step 3
print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog2))

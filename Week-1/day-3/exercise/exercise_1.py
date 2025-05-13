class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Step 1: Create cat objects
cat1 = Cat("Moto", 3)
cat2 = Cat("Tiny", 5)
cat3 = Cat("Shadow", 2)

# Step 2: Create a function to find the oldest cat
def find_oldest_cat(cat1, cat2, cat3):
    return max([cat1, cat2, cat3], key=lambda cat: cat.age)

# Step 3: Find the oldest cat and print its details
oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name} and is {oldest_cat.age} years old")



#2

class Dog:
    def __init__(self,name , height):
        self.name = name
        self.height = height
    def bark(self):
        print("goes woof!")
    def jump(self):
        print(f"jumps {self.height * 2} cm hight!")


davids_dog = Dog('Ivy', 0.2)
sarahs_dog = Dog('Roxy', 0.5)

print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} meters tall.")
davids_dog.bark()
davids_dog.jump()

print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} meters tall.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger than {sarahs_dog.name}.")
elif davids_dog.height < sarahs_dog.height:
    print(f"{sarahs_dog.name} is bigger than {davids_dog.name}.")
else:
    print(f"{davids_dog.name} and {sarahs_dog.name} are the same size.")

 
 #3

 import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = [dog for dog in args]
        print(f"{self.name}, {', '.join(names)} kayl3bo m3a b3diyat-hom")

    def do_a_trick(self):
        if self.trained:
            tricks = ["dar barrel roll", "w9ef 3la rajlou", "ssalama m3ak", "tmed"]
            print(f"{self.name} {random.choice(tricks)}")
        else:
            print(f"{self.name} mazal ma trained")


my_dog = PetDog("Fluffy", 2, 8)
my_dog.train()
my_dog.play("Boby", "Simo", "Rocky")
my_dog.do_a_trick()


#4
class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18

class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        baby = Person(first_name, age)
        baby.last_name = self.last_name
        self.members.append(baby)

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Smi7 liya, ma t9drch tkhrej ")
                return
        print("not exist int th list")

    def family_presentation(self):
        print(f"Family {self.last_name}")
        for member in self.members:
            print(f"{member.first_name} 3ando {member.age} 3am")


my_family = Family("Benali")
my_family.born("Mohammed", 17)
my_family.born("Youssef", 21)
my_family.family_presentation()
my_family.check_majority("Sara")
my_family.check_majority("Youssef")


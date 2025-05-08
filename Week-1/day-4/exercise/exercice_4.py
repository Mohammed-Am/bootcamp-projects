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

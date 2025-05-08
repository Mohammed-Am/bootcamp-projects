class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f"{self.name} kaydor f dar"

class Bengal(Cat):
    def sing(self, sounds):
        return f"{sounds}"

class Chartreux(Cat):
    def sing(self, sounds):
        return f"{sounds}"

class Siamese(Cat):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.color = "white w black"  # ajotena attribut jdiiid

    def sing(self, sounds):
        return f"{self.name} kat9oul: {sounds}"

bengal = Bengal("Zizou", 3)
chartreux = Chartreux("Maw", 2)
siamese = Siamese("jow", 4)

all_cats = [bengal, chartreux, siamese]

# Step 3
sara_pets = Pets(all_cats)

# Step 4
sara_pets.walk()
